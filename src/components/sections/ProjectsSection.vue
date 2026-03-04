<template>
  <section id="projects" ref="targetRef" class="projects-section">
    <div class="section-container">
      <div class="section-header" :class="{ revealed: isVisible }">
        <span class="section-number">05</span>
        <h2 class="section-title">{{ t('projects.title') }}</h2>
        <div class="section-line"></div>
      </div>

      <div class="projects-showcase">
        <div
          v-for="(project, index) in t('projects.items')"
          :key="index"
          class="project-card"
          :class="{ revealed: isVisible }"
          :style="{ transitionDelay: `${0.15 + index * 0.12}s` }"
        >
          <div class="project-content">
            <div class="project-meta">
              <span class="project-label">{{ t('projects.featured') }}</span>
              <div class="project-links">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  <v-icon size="18">mdi-open-in-new</v-icon>
                </a>
              </div>
            </div>

            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-highlights">
              <div
                v-for="(highlight, idx) in project.highlights"
                :key="idx"
                class="highlight-item"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ highlight }}</span>
              </div>
            </div>

            <div class="project-stack">
              <span
                v-for="(tech, idx) in project.tech"
                :key="idx"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="project-visual">
            <div class="visual-placeholder">
              <div class="placeholder-bars">
                <div class="bar" v-for="n in 4" :key="n"></div>
              </div>
              <div class="placeholder-grid">
                <div class="grid-cell" v-for="n in 6" :key="n"></div>
              </div>
            </div>
            <div class="visual-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { t } = useI18n()
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.1 })
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.projects-section {
  padding: $space-32 $space-8;
  position: relative;
}

.section-container {
  max-width: $max-width;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: center;
  gap: $space-4;
  margin-bottom: $space-16;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo;

  &.revealed { opacity: 1; transform: translateY(0); }

  .section-number {
    font-family: $font-mono;
    font-size: $fs-sm;
    color: $accent-violet;
    font-weight: $fw-semibold;
  }

  .section-title {
    font-family: $font-display;
    font-size: $fs-3xl;
    font-weight: $fw-bold;
    color: $text-primary;
    letter-spacing: -0.02em;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, $border-medium, transparent);
    max-width: 300px;
  }
}

.projects-showcase {
  display: flex;
  flex-direction: column;
  gap: $space-10;
}

.project-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: $space-10;
  align-items: center;
  padding: $space-10;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid $border-subtle;
  border-radius: $radius-2xl;
  transition: all 0.6s $ease-out-expo;
  opacity: 0;
  transform: translateY(40px);

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    border-color: rgba(124, 58, 237, 0.2);
    background: rgba(255, 255, 255, 0.025);
    box-shadow: 0 8px 60px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(124, 58, 237, 0.1);
    transform: translateY(-4px);
  }

  &:nth-child(even) {
    direction: rtl;
    > * { direction: ltr; }
  }
}

.project-content {
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $space-4;
}

.project-label {
  font-family: $font-mono;
  font-size: $fs-xs;
  color: $accent-violet;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-links {
  display: flex;
  gap: $space-2;
}

.project-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $radius-md;
  border: 1px solid $border-subtle;
  color: $text-tertiary;
  text-decoration: none;
  transition: all $transition-fast;

  &:hover {
    color: $accent-cyan;
    border-color: $accent-cyan;
    background: rgba(6, 182, 212, 0.06);
  }
}

.project-name {
  font-family: $font-display;
  font-size: $fs-4xl;
  font-weight: $fw-extrabold;
  color: $text-primary;
  margin-bottom: $space-4;
  letter-spacing: -0.02em;
}

.project-description {
  font-size: $fs-base;
  color: $text-secondary;
  line-height: 1.7;
  margin-bottom: $space-6;
}

.project-highlights {
  display: flex;
  flex-direction: column;
  gap: $space-2;
  margin-bottom: $space-6;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: $space-3;
  font-size: $fs-sm;
  color: $text-secondary;

  svg {
    color: $accent-violet;
    flex-shrink: 0;
  }
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;
}

.tech-tag {
  padding: $space-1 $space-3;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid $border-subtle;
  border-radius: $radius-sm;
  font-family: $font-mono;
  font-size: $fs-xs;
  color: $text-tertiary;
  transition: all $transition-fast;

  &:hover {
    border-color: $accent-cyan;
    color: $accent-cyan;
  }
}

// Visual placeholder (SaaS-style mockup)
.project-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-placeholder {
  width: 100%;
  aspect-ratio: 4/3;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid $border-subtle;
  border-radius: $radius-xl;
  padding: $space-6;
  display: flex;
  flex-direction: column;
  gap: $space-4;
  overflow: hidden;
  position: relative;

  .placeholder-bars {
    display: flex;
    flex-direction: column;
    gap: $space-2;

    .bar {
      height: 8px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.04);

      &:nth-child(1) { width: 70%; }
      &:nth-child(2) { width: 50%; }
      &:nth-child(3) { width: 85%; }
      &:nth-child(4) { width: 40%; }
    }
  }

  .placeholder-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-3;
    flex: 1;

    .grid-cell {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: $radius-md;
    }
  }
}

.visual-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background: $gradient-glow-violet;
  filter: blur(60px);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;

  .project-card:hover & {
    opacity: 0.4;
  }
}

@media (max-width: $bp-lg) {
  .project-card {
    grid-template-columns: 1fr;
    padding: $space-8;

    &:nth-child(even) {
      direction: ltr;
    }
  }

  .project-visual {
    display: none;
  }
}

@media (max-width: $bp-sm) {
  .projects-section {
    padding: $space-20 $space-6;
  }

  .project-card {
    padding: $space-6;
  }

  .project-name {
    font-size: $fs-3xl;
  }
}
</style>

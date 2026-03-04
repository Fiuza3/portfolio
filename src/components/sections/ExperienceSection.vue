<template>
  <section id="experience" ref="targetRef" class="experience-section">
    <div class="section-container">
      <div class="section-header" :class="{ revealed: isVisible }">
        <span class="section-number">02</span>
        <h2 class="section-title">{{ t('experience.title') }}</h2>
        <div class="section-line"></div>
      </div>

      <div class="timeline">
        <div class="timeline-line"></div>

        <div
          v-for="(job, index) in t('experience.jobs')"
          :key="index"
          class="timeline-item"
          :class="{ revealed: isVisible }"
          :style="{ transitionDelay: `${0.1 + index * 0.12}s` }"
        >
          <div class="timeline-marker">
            <div class="marker-dot" :class="{ current: index === 0 }"></div>
          </div>

          <div class="timeline-card" @mouseenter="hoverCard($event)" @mouseleave="resetCard($event)">
            <div class="card-header">
              <div class="card-meta">
                <span class="card-period">{{ job.period }}</span>
                <span class="card-type">{{ job.type }}</span>
              </div>
              <h3 class="card-role">{{ job.role }}</h3>
              <span class="card-company">{{ job.company }}</span>
            </div>

            <p class="card-description">{{ job.description }}</p>

            <div v-if="job.achievements" class="card-achievements">
              <div
                v-for="(achievement, idx) in job.achievements"
                :key="idx"
                class="achievement"
              >
                <span class="achievement-arrow">&#8250;</span>
                <span>{{ achievement }}</span>
              </div>
            </div>
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
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.08 })

const hoverCard = (e) => {
  const card = e.currentTarget
  card.style.transform = 'translateX(8px)'
}

const resetCard = (e) => {
  const card = e.currentTarget
  card.style.transform = 'translateX(0)'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.experience-section {
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

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }

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

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline-line {
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, $accent-violet, $border-subtle, transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: $space-10;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo;

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -40px;
  top: 24px;

  .marker-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: $bg-secondary;
    border: 2px solid $border-medium;
    transition: all $transition-normal;

    &.current {
      border-color: $accent-violet;
      background: $accent-violet;
      box-shadow: 0 0 12px rgba(124, 58, 237, 0.4);
    }
  }
}

.timeline-card {
  padding: $space-8;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid $border-subtle;
  border-radius: $radius-lg;
  transition: all 0.4s $ease-out-expo;

  &:hover {
    border-color: rgba(124, 58, 237, 0.3);
    background: rgba(124, 58, 237, 0.03);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  }
}

.card-header {
  margin-bottom: $space-4;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: $space-3;
  margin-bottom: $space-3;
}

.card-period {
  font-family: $font-mono;
  font-size: $fs-xs;
  color: $accent-cyan;
  letter-spacing: 0.02em;
}

.card-type {
  padding: $space-1 $space-3;
  background: rgba(124, 58, 237, 0.1);
  border-radius: $radius-sm;
  font-family: $font-mono;
  font-size: 0.7rem;
  color: $accent-violet;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-role {
  font-family: $font-display;
  font-size: $fs-xl;
  font-weight: $fw-bold;
  color: $text-primary;
  margin-bottom: $space-1;
}

.card-company {
  font-size: $fs-sm;
  color: $text-secondary;
  font-weight: $fw-medium;
}

.card-description {
  font-size: $fs-sm;
  color: $text-secondary;
  line-height: 1.7;
  margin-bottom: $space-4;
}

.card-achievements {
  display: flex;
  flex-direction: column;
  gap: $space-2;
}

.achievement {
  display: flex;
  align-items: flex-start;
  gap: $space-3;
  font-size: $fs-sm;
  color: $text-secondary;
  line-height: 1.6;

  .achievement-arrow {
    color: $accent-violet;
    font-size: $fs-lg;
    line-height: 1.3;
    flex-shrink: 0;
  }
}

@media (max-width: $bp-md) {
  .timeline {
    padding-left: 30px;
  }

  .timeline-marker {
    left: -30px;
  }

  .timeline-card {
    padding: $space-6;
  }

  .experience-section {
    padding: $space-20 $space-6;
  }
}
</style>

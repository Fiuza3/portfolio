<template>
  <section id="skills" ref="targetRef" class="skills-section">
    <div class="section-container">
      <div class="section-header" :class="{ revealed: isVisible }">
        <span class="section-number">03</span>
        <h2 class="section-title">{{ t('skills.title') }}</h2>
        <div class="section-line"></div>
      </div>

      <div class="skills-grid">
        <div
          v-for="(category, key) in categories"
          :key="key"
          class="skill-card"
          :class="{ revealed: isVisible }"
          :style="{ transitionDelay: `${0.1 + categories.indexOf(category) * 0.1}s` }"
          @mousemove="tiltCard($event)"
          @mouseleave="resetTilt($event)"
        >
          <div class="card-inner">
            <div class="card-icon" :style="{ background: category.gradient }">
              <v-icon :color="category.color" size="24">{{ category.icon }}</v-icon>
            </div>

            <h3 class="card-title">{{ t(`skills.categories.${category.key}.title`) }}</h3>

            <div class="card-skills">
              <span
                v-for="(skill, idx) in t(`skills.categories.${category.key}.items`)"
                :key="idx"
                class="skill-tag"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="card-glow" :style="{ background: category.glowColor }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { t } = useI18n()
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.15 })

const categories = reactive([
  {
    key: 'frontend',
    icon: 'mdi-monitor-dashboard',
    color: '#06b6d4',
    gradient: 'rgba(6, 182, 212, 0.1)',
    glowColor: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)'
  },
  {
    key: 'backend',
    icon: 'mdi-server',
    color: '#7c3aed',
    gradient: 'rgba(124, 58, 237, 0.1)',
    glowColor: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)'
  },
  {
    key: 'devops',
    icon: 'mdi-cloud-outline',
    color: '#2563eb',
    gradient: 'rgba(37, 99, 235, 0.1)',
    glowColor: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)'
  },
  {
    key: 'methodologies',
    icon: 'mdi-chart-timeline-variant',
    color: '#10b981',
    gradient: 'rgba(16, 185, 129, 0.1)',
    glowColor: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)'
  }
])

const tiltCard = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
}

const resetTilt = (e) => {
  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.skills-section {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-6;
}

.skill-card {
  position: relative;
  border-radius: $radius-xl;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo, transform 0.3s ease;

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  .card-inner {
    position: relative;
    z-index: 1;
    padding: $space-8;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid $border-subtle;
    border-radius: $radius-xl;
    transition: border-color $transition-normal, background $transition-normal;
  }

  &:hover .card-inner {
    border-color: rgba(124, 58, 237, 0.25);
    background: rgba(255, 255, 255, 0.03);
  }

  .card-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 0;
    pointer-events: none;
  }

  &:hover .card-glow {
    opacity: 1;
  }
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: $radius-md;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: $space-5;
}

.card-title {
  font-family: $font-display;
  font-size: $fs-xl;
  font-weight: $fw-bold;
  color: $text-primary;
  margin-bottom: $space-5;
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;
}

.skill-tag {
  padding: $space-1 $space-3;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid $border-subtle;
  border-radius: $radius-sm;
  font-family: $font-mono;
  font-size: $fs-xs;
  color: $text-secondary;
  transition: all $transition-fast;

  &:hover {
    border-color: $accent-violet;
    color: $accent-violet;
    background: rgba(124, 58, 237, 0.06);
  }
}

@media (max-width: $bp-md) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skills-section {
    padding: $space-20 $space-6;
  }
}
</style>

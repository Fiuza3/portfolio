<template>
  <section id="architecture" ref="targetRef" class="architecture-section">
    <div class="section-container">
      <div class="section-header" :class="{ revealed: isVisible }">
        <span class="section-number">04</span>
        <h2 class="section-title">{{ t('architecture.title') }}</h2>
        <div class="section-line"></div>
      </div>

      <p class="section-subtitle" :class="{ revealed: isVisible }">
        {{ t('architecture.subtitle') }}
      </p>

      <div class="arch-grid">
        <div
          v-for="(item, index) in archItems"
          :key="item.key"
          class="arch-card"
          :class="{ revealed: isVisible }"
          :style="{ transitionDelay: `${0.15 + index * 0.08}s` }"
          @mousemove="tiltCard($event)"
          @mouseleave="resetTilt($event)"
        >
          <div class="arch-card-inner">
            <div class="arch-icon-wrap" :style="{ '--glow': item.color }">
              <v-icon :color="item.color" size="28">{{ item.icon }}</v-icon>
            </div>
            <h3 class="arch-title">{{ t(`architecture.items.${item.key}.title`) }}</h3>
            <p class="arch-desc">{{ t(`architecture.items.${item.key}.desc`) }}</p>
          </div>
        </div>
      </div>

      <div class="arch-banner" :class="{ revealed: isVisible }">
        <div class="banner-content">
          <div class="banner-icon">
            <v-icon color="#7c3aed" size="32">mdi-shield-check</v-icon>
          </div>
          <div class="banner-text">
            <h3>{{ t('architecture.banner.title') }}</h3>
            <p>{{ t('architecture.banner.desc') }}</p>
          </div>
        </div>
        <div class="banner-glow"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { t } = useI18n()
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.1 })

const archItems = [
  { key: 'linux', icon: 'mdi-linux', color: '#f59e0b' },
  { key: 'docker', icon: 'mdi-docker', color: '#06b6d4' },
  { key: 'deploy', icon: 'mdi-rocket-launch', color: '#7c3aed' },
  { key: 'dns', icon: 'mdi-dns', color: '#2563eb' },
  { key: 'vps', icon: 'mdi-server-network', color: '#10b981' },
  { key: 'scalability', icon: 'mdi-chart-line', color: '#ec4899' },
]

const tiltCard = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 25
  const rotateY = (centerX - x) / 25
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}

const resetTilt = (e) => {
  e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.architecture-section {
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
  margin-bottom: $space-6;
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

.section-subtitle {
  font-size: $fs-lg;
  color: $text-secondary;
  line-height: 1.7;
  max-width: 650px;
  margin-bottom: $space-12;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s $ease-out-expo 0.1s;

  &.revealed { opacity: 1; transform: translateY(0); }
}

.arch-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-5;
  margin-bottom: $space-12;
}

.arch-card {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo, transform 0.25s ease;

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

.arch-card-inner {
  padding: $space-8 $space-6;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid $border-subtle;
  border-radius: $radius-xl;
  transition: all $transition-normal;
  height: 100%;

  .arch-card:hover & {
    border-color: rgba(124, 58, 237, 0.25);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  }
}

.arch-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: $radius-lg;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: $space-5;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid $border-subtle;
  transition: all $transition-normal;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: $radius-xl;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
    opacity: 0;
    transition: opacity $transition-normal;
  }

  .arch-card:hover &::after {
    opacity: 1;
  }
}

.arch-title {
  font-family: $font-display;
  font-size: $fs-lg;
  font-weight: $fw-bold;
  color: $text-primary;
  margin-bottom: $space-3;
}

.arch-desc {
  font-size: $fs-sm;
  color: $text-secondary;
  line-height: 1.6;
}

// Banner
.arch-banner {
  position: relative;
  overflow: hidden;
  border-radius: $radius-xl;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s $ease-out-expo 0.5s;

  &.revealed { opacity: 1; transform: translateY(0); }

  .banner-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: $space-6;
    padding: $space-8;
    background: rgba(124, 58, 237, 0.04);
    border: 1px solid rgba(124, 58, 237, 0.15);
    border-radius: $radius-xl;
  }

  .banner-icon {
    width: 56px;
    height: 56px;
    border-radius: $radius-lg;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(124, 58, 237, 0.1);
    flex-shrink: 0;
  }

  .banner-text {
    h3 {
      font-family: $font-display;
      font-size: $fs-xl;
      font-weight: $fw-bold;
      color: $text-primary;
      margin-bottom: $space-2;
    }

    p {
      font-size: $fs-sm;
      color: $text-secondary;
      line-height: 1.6;
    }
  }

  .banner-glow {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 300px;
    height: 300px;
    background: $gradient-glow-violet;
    filter: blur(60px);
    opacity: 0.3;
    pointer-events: none;
  }
}

@media (max-width: $bp-lg) {
  .arch-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $bp-sm) {
  .arch-grid {
    grid-template-columns: 1fr;
  }

  .architecture-section {
    padding: $space-20 $space-6;
  }

  .arch-banner .banner-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>

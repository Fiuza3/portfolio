<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-badge" :class="{ visible: loaded }">
        <span class="badge-dot"></span>
        <span class="badge-text">{{ t('hero.available') }}</span>
      </div>

      <h1 class="hero-name" :class="{ visible: loaded }">
        <span class="name-line">{{ t('hero.greeting') }}</span>
        <span class="name-highlight">Marcus Fiuza</span>
      </h1>

      <h2 class="hero-title" :class="{ visible: loaded }">
        {{ t('hero.title') }}
      </h2>

      <p class="hero-subtitle" :class="{ visible: loaded }">
        {{ t('hero.subtitle') }}
      </p>

      <div class="hero-stack" :class="{ visible: loaded }">
        <span v-for="tech in ['Vue.js', 'Node.js', 'React', 'Docker', 'MySQL']" :key="tech" class="stack-tag">
          {{ tech }}
        </span>
      </div>

      <div class="hero-actions" :class="{ visible: loaded }">
        <a href="#projects" class="btn-primary">
          <span>{{ t('hero.cta') }}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#contact" class="btn-ghost">
          <span>{{ t('hero.contact') }}</span>
        </a>
      </div>
    </div>

    <div class="hero-scroll" :class="{ visible: loaded }">
      <div class="scroll-line"></div>
      <span class="scroll-text">{{ t('hero.scroll') }}</span>
    </div>

    <!-- Decorative floating elements -->
    <div class="hero-orb orb-violet"></div>
    <div class="hero-orb orb-cyan"></div>
    <div class="hero-orb orb-blue"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const loaded = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: $space-32 $space-8 $space-16;
  overflow: hidden;
}

.hero-content {
  max-width: $max-width;
  width: 100%;
  position: relative;
  z-index: 2;
}

// Badge
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  padding: $space-2 $space-4;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: $radius-full;
  margin-bottom: $space-8;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s $ease-out-expo;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    animation: subtleGlow 2s ease-in-out infinite;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
  }

  .badge-text {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $text-secondary;
    letter-spacing: 0.05em;
  }
}

// Name
.hero-name {
  margin-bottom: $space-6;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo 0.1s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .name-line {
    display: block;
    font-family: $font-body;
    font-size: $fs-xl;
    font-weight: $fw-regular;
    color: $text-secondary;
    margin-bottom: $space-3;
    letter-spacing: 0.02em;
  }

  .name-highlight {
    display: block;
    font-family: $font-display;
    font-size: $fs-hero;
    font-weight: $fw-extrabold;
    letter-spacing: -0.03em;
    line-height: 1;
    background: linear-gradient(135deg, $text-primary 0%, $text-primary 40%, $accent-violet 70%, $accent-cyan 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

// Title
.hero-title {
  font-family: $font-display;
  font-size: clamp(1.5rem, 4vw, $fs-4xl);
  font-weight: $fw-bold;
  color: $text-primary;
  margin-bottom: $space-6;
  letter-spacing: -0.02em;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo 0.2s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// Subtitle
.hero-subtitle {
  font-family: $font-body;
  font-size: $fs-lg;
  color: $text-secondary;
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: $space-8;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo 0.3s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// Stack tags
.hero-stack {
  display: flex;
  flex-wrap: wrap;
  gap: $space-3;
  margin-bottom: $space-10;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s $ease-out-expo 0.4s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stack-tag {
    padding: $space-2 $space-4;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid $border-subtle;
    border-radius: $radius-sm;
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $text-tertiary;
    letter-spacing: 0.02em;
    transition: all $transition-normal;

    &:hover {
      border-color: $accent-violet;
      color: $accent-violet;
      background: rgba(124, 58, 237, 0.05);
    }
  }
}

// Actions
.hero-actions {
  display: flex;
  align-items: center;
  gap: $space-4;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s $ease-out-expo 0.5s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: $space-3;
  padding: $space-4 $space-8;
  background: $accent-violet;
  color: white;
  font-family: $font-body;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  border-radius: $radius-lg;
  text-decoration: none;
  transition: all $transition-normal;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, $accent-violet 0%, $accent-blue 100%);
    opacity: 0;
    transition: opacity $transition-normal;
  }

  span, svg {
    position: relative;
    z-index: 1;
  }

  svg {
    transition: transform $transition-normal;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(124, 58, 237, 0.3);
    color: white;

    &::before {
      opacity: 1;
    }

    svg {
      transform: translateX(3px);
    }
  }
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: $space-4 $space-8;
  color: $text-secondary;
  font-family: $font-body;
  font-size: $fs-sm;
  font-weight: $fw-medium;
  border-radius: $radius-lg;
  text-decoration: none;
  border: 1px solid $border-subtle;
  transition: all $transition-normal;

  &:hover {
    color: $text-primary;
    border-color: $border-medium;
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-2px);
  }
}

// Scroll indicator
.hero-scroll {
  position: absolute;
  bottom: $space-10;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-3;
  opacity: 0;
  transition: opacity 0.8s $ease-out-expo 0.8s;

  &.visible {
    opacity: 1;
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, $accent-violet, transparent);
    animation: bounceGentle 2s ease-in-out infinite;
  }

  .scroll-text {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $text-tertiary;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    writing-mode: vertical-rl;
  }
}

// Decorative orbs
.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: glowPulse 6s ease-in-out infinite;

  &.orb-violet {
    width: 500px;
    height: 500px;
    background: $gradient-glow-violet;
    top: 10%;
    right: -10%;
    filter: blur(80px);
    opacity: 0.5;
  }

  &.orb-cyan {
    width: 400px;
    height: 400px;
    background: $gradient-glow-cyan;
    bottom: 10%;
    left: -5%;
    filter: blur(80px);
    opacity: 0.4;
    animation-delay: 2s;
  }

  &.orb-blue {
    width: 300px;
    height: 300px;
    background: $gradient-glow-blue;
    top: 50%;
    left: 40%;
    filter: blur(100px);
    opacity: 0.3;
    animation-delay: 4s;
  }
}

@media (max-width: $bp-md) {
  .hero-section {
    padding: $space-24 $space-6 $space-16;
  }

  .hero-name .name-highlight {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

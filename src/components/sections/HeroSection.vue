<template>
  <section id="home" class="hero-section" @mousemove="handleMouseMove">
    <div class="hero-background">
      <div class="background-image"></div>
      <div class="spotlight" :style="spotlightStyle">
        <div class="spotlight-reveal"></div>
      </div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
    </div>

    <v-container class="hero-content">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="8" class="text-center">
          <p class="greeting">
            {{ t('hero.greeting') }}
          </p>
          
          <h1 class="hero-name">
            <span class="name-text" @mouseenter="triggerGlitch">
              {{ t('hero.name') }}
            </span>
          </h1>

          <h2 class="hero-title">
            {{ t('hero.title') }}
          </h2>

          <p class="hero-subtitle">
            {{ t('hero.subtitle') }}
          </p>

          <div class="hero-actions">
            <v-btn
              size="large"
              class="cta-button"
              href="#projects"
            >
              {{ t('hero.cta') }}
              <v-icon right>mdi-arrow-down</v-icon>
            </v-btn>
          </div>

          <div class="scroll-indicator">
            <span>{{ t('hero.scroll') }}</span>
            <v-icon class="scroll-icon">mdi-chevron-down</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const glitching = ref(false)
const mouseX = ref(50)
const mouseY = ref(50)

const triggerGlitch = () => {
  if (!glitching.value) {
    glitching.value = true
    setTimeout(() => {
      glitching.value = false
    }, 300)
  }
}

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
}

const spotlightStyle = computed(() => ({
  '--mouse-x': `${mouseX.value}%`,
  '--mouse-y': `${mouseY.value}%`
}))
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/animations.scss';

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/fundo.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0;
}

.spotlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  transition: --mouse-x 0.15s ease-out, --mouse-y 0.15s ease-out;
}

.spotlight-reveal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/fundo.jpg');
  background-size: cover;
  background-position: center;
  clip-path: circle(200px at var(--mouse-x, 50%) var(--mouse-y, 50%));
  transition: clip-path 0.15s ease-out;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;
  z-index: 2;

  &.orb-1 {
    width: 400px;
    height: 400px;
    background: $gradient-glow;
    top: 10%;
    left: 10%;
  }

  &.orb-2 {
    width: 500px;
    height: 500px;
    background: $gradient-glow;
    bottom: 10%;
    right: 10%;
    animation-delay: 2s;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(30px);
  }
}

.hero-content {
  position: relative;
  z-index: 3;
}

.greeting {
  font-size: $font-size-lg;
  color: $neon-cyan;
  font-family: $font-family-mono;
  margin-bottom: $spacing-sm;
  animation: fadeInDown 0.8s ease-out;
}

.hero-name {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: $spacing-md;
  animation: fadeInUp 0.8s ease-out 0.2s both;

  .name-text {
    background: linear-gradient(135deg, #fff 0%, $neon-cyan 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      animation: glitch 0.3s ease-in-out;
    }
  }
}

.hero-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: $spacing-sm;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-subtitle {
  font-size: $font-size-xl;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: $spacing-xl;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-actions {
  margin-bottom: $spacing-xxl;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.cta-button {
  background: $gradient-accent !important;
  color: $void-black !important;
  font-weight: 700;
  padding: $spacing-md $spacing-xl !important;
  border-radius: $border-radius-lg;
  transition: all $transition-normal;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;

  &:hover {
    transform: translateY(-3px);
    box-shadow: $shadow-neon;
  }

  :deep(.v-btn__content) {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
  }
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-xs;
  color: rgba(255, 255, 255, 0.5);
  font-size: $font-size-sm;
  animation: fadeIn 0.8s ease-out 1s both;

  .scroll-icon {
    animation: bounce 2s ease-in-out infinite;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>

<template>
  <section id="about" ref="targetRef" class="about-section">
    <div class="section-container">
      <div class="section-header" :class="{ revealed: isVisible }">
        <span class="section-number">01</span>
        <h2 class="section-title">{{ t('about.title') }}</h2>
        <div class="section-line"></div>
      </div>

      <div class="about-grid">
        <div class="about-content" :class="{ revealed: isVisible }">
          <p class="about-text" v-html="t('about.description')"></p>

          <div class="about-details">
            <div class="detail-item">
              <span class="detail-label">{{ t('about.locationLabel') }}</span>
              <span class="detail-value">{{ t('about.location') }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">{{ t('about.statusLabel') }}</span>
              <span class="detail-value status-available">
                <span class="status-dot"></span>
                {{ t('about.availability') }}
              </span>
            </div>
            <div class="detail-item">
              <span class="detail-label">{{ t('about.educationLabel') }}</span>
              <span class="detail-value">{{ t('about.education') }}</span>
            </div>
          </div>

          <div class="certifications">
            <h3 class="cert-title">{{ t('certifications.title') }}</h3>
            <div class="cert-list">
              <div
                v-for="(cert, index) in t('certifications.items')"
                :key="index"
                class="cert-item"
              >
                <svg class="cert-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7.5L5.5 11L12 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ cert }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-visual" :class="{ revealed: isVisible }">
          <div class="profile-wrapper">
            <img src="/Marcus-Fiuza.jpg" alt="Marcus Fiuza" class="profile-photo" />
            <div class="profile-border"></div>
            <div class="profile-glow"></div>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-number">3+</span>
              <span class="stat-label">{{ t('about.yearsExp') }}</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">10+</span>
              <span class="stat-label">{{ t('about.projectsDelivered') }}</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">5+</span>
              <span class="stat-label">{{ t('about.techStack') }}</span>
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
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.15 })
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.about-section {
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

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: $space-16;
  align-items: start;
}

.about-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo 0.1s;

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-text {
  font-size: $fs-lg;
  line-height: 1.8;
  color: $text-secondary;
  margin-bottom: $space-10;

  :deep(a) {
    color: $accent-cyan;
    text-decoration: none;
    font-weight: $fw-medium;
    border-bottom: 1px solid transparent;
    transition: border-color $transition-fast;

    &:hover {
      border-bottom-color: $accent-cyan;
    }
  }
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: $space-4;
  margin-bottom: $space-10;
  padding: $space-6;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid $border-subtle;
  border-radius: $radius-lg;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: $space-4;

  .detail-label {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $text-tertiary;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    min-width: 100px;
  }

  .detail-value {
    font-size: $fs-sm;
    color: $text-primary;
    font-weight: $fw-medium;

    &.status-available {
      display: flex;
      align-items: center;
      gap: $space-2;
      color: #10b981;
    }
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
  }
}

.certifications {
  .cert-title {
    font-family: $font-display;
    font-size: $fs-xl;
    font-weight: $fw-semibold;
    color: $text-primary;
    margin-bottom: $space-4;
  }

  .cert-list {
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  .cert-item {
    display: flex;
    align-items: flex-start;
    gap: $space-3;
    font-size: $fs-sm;
    color: $text-secondary;
    line-height: 1.5;

    .cert-icon {
      color: $accent-violet;
      flex-shrink: 0;
      margin-top: 3px;
    }
  }
}

.about-visual {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo 0.2s;

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-wrapper {
  position: relative;
  width: 280px;
  height: 340px;
  margin: 0 auto $space-10;

  .profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $radius-xl;
    position: relative;
    z-index: 2;
    filter: grayscale(80%) contrast(1.1);
    transition: filter 0.6s $ease-out-expo;

    &:hover {
      filter: grayscale(0%) contrast(1);
    }
  }

  .profile-border {
    position: absolute;
    top: 16px;
    left: 16px;
    right: -16px;
    bottom: -16px;
    border: 1px solid $accent-violet;
    border-radius: $radius-xl;
    opacity: 0.3;
    z-index: 1;
    transition: all 0.4s $ease-out-expo;
  }

  .profile-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 200%;
    background: $gradient-glow-violet;
    z-index: 0;
    filter: blur(60px);
    opacity: 0.3;
  }

  &:hover .profile-border {
    top: 10px;
    left: 10px;
    opacity: 0.5;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-4;
}

.stat-card {
  text-align: center;
  padding: $space-5 $space-3;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid $border-subtle;
  border-radius: $radius-lg;
  transition: all $transition-normal;

  &:hover {
    border-color: $accent-violet;
    background: rgba(124, 58, 237, 0.05);
    transform: translateY(-2px);
  }

  .stat-number {
    display: block;
    font-family: $font-display;
    font-size: $fs-3xl;
    font-weight: $fw-extrabold;
    color: $text-primary;
    line-height: 1;
    margin-bottom: $space-2;
  }

  .stat-label {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $text-tertiary;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}

@media (max-width: $bp-lg) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: $space-12;
  }

  .about-visual {
    order: -1;
  }

  .profile-wrapper {
    width: 220px;
    height: 280px;
  }
}

@media (max-width: $bp-sm) {
  .about-section {
    padding: $space-20 $space-6;
  }

  .detail-item {
    flex-direction: column;
    gap: $space-1;

    .detail-label {
      min-width: unset;
    }
  }
}
</style>

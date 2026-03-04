<template>
  <section id="contact" ref="targetRef" class="contact-section">
    <div class="section-container">
      <div class="contact-inner" :class="{ revealed: isVisible }">
        <div class="section-header">
          <span class="section-number">06</span>
          <h2 class="section-title">{{ t('contact.title') }}</h2>
        </div>

        <p class="contact-description">
          {{ t('contact.description') }}
        </p>

        <div class="contact-grid">
          <a
            :href="`mailto:${SOCIAL_LINKS.email}`"
            class="contact-card"
          >
            <div class="contact-icon">
              <v-icon size="24">mdi-email-outline</v-icon>
            </div>
            <div class="contact-info">
              <span class="contact-label">Email</span>
              <span class="contact-value">{{ SOCIAL_LINKS.email }}</span>
            </div>
            <svg class="contact-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <a
            :href="SOCIAL_LINKS.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card"
          >
            <div class="contact-icon whatsapp">
              <v-icon size="24">mdi-whatsapp</v-icon>
            </div>
            <div class="contact-info">
              <span class="contact-label">WhatsApp</span>
              <span class="contact-value">{{ t('contact.info.phone') }}</span>
            </div>
            <svg class="contact-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <a
            :href="SOCIAL_LINKS.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card"
          >
            <div class="contact-icon linkedin">
              <v-icon size="24">mdi-linkedin</v-icon>
            </div>
            <div class="contact-info">
              <span class="contact-label">LinkedIn</span>
              <span class="contact-value">devfiuza</span>
            </div>
            <svg class="contact-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <a
            :href="SOCIAL_LINKS.github"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card"
          >
            <div class="contact-icon github">
              <v-icon size="24">mdi-github</v-icon>
            </div>
            <div class="contact-info">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">fiuza3</span>
            </div>
            <svg class="contact-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

        <div class="contact-location">
          <v-icon size="16" color="#7c3aed">mdi-map-marker</v-icon>
          <span>{{ t('contact.info.location') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { SOCIAL_LINKS } from '@/utils/constants'

const { t } = useI18n()
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.15 })
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.contact-section {
  padding: $space-32 $space-8;
  position: relative;
}

.section-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-inner {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s $ease-out-expo;

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $space-4;
  margin-bottom: $space-6;

  .section-number {
    font-family: $font-mono;
    font-size: $fs-sm;
    color: $accent-violet;
    font-weight: $fw-semibold;
  }

  .section-title {
    font-family: $font-display;
    font-size: $fs-4xl;
    font-weight: $fw-bold;
    color: $text-primary;
    letter-spacing: -0.02em;
  }
}

.contact-description {
  font-size: $fs-lg;
  color: $text-secondary;
  line-height: 1.7;
  margin-bottom: $space-12;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-4;
  margin-bottom: $space-10;
  text-align: left;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: $space-4;
  padding: $space-5 $space-6;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid $border-subtle;
  border-radius: $radius-lg;
  text-decoration: none;
  transition: all $transition-normal;
  cursor: pointer;

  &:hover {
    border-color: rgba(124, 58, 237, 0.25);
    background: rgba(124, 58, 237, 0.03);
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

    .contact-arrow {
      transform: translateX(3px);
      color: $accent-violet;
    }
  }
}

.contact-icon {
  width: 44px;
  height: 44px;
  border-radius: $radius-md;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  color: $accent-violet;
  flex-shrink: 0;

  &.whatsapp {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }

  &.linkedin {
    background: rgba(37, 99, 235, 0.1);
    color: $accent-blue;
  }

  &.github {
    background: rgba(255, 255, 255, 0.06);
    color: $text-secondary;
  }
}

.contact-info {
  flex: 1;
  min-width: 0;

  .contact-label {
    display: block;
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $text-tertiary;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .contact-value {
    display: block;
    font-size: $fs-sm;
    color: $text-primary;
    font-weight: $fw-medium;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.contact-arrow {
  color: $text-tertiary;
  flex-shrink: 0;
  transition: all $transition-fast;
}

.contact-location {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  font-size: $fs-sm;
  color: $text-tertiary;
}

@media (max-width: $bp-md) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: $bp-sm) {
  .contact-section {
    padding: $space-20 $space-6;
  }

  .section-header .section-title {
    font-size: $fs-3xl;
  }
}
</style>

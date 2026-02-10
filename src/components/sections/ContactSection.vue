<template>
  <section id="contact" ref="targetRef" class="contact-section">
    <v-container>
      <div :class="{ 'animate-fade-in-up': isVisible }">
        <h2 class="section-title">
          <span class="title-number">05.</span>
          {{ t('contact.title') }}
          <span class="title-line"></span>
        </h2>

        <p class="contact-description">
          {{ t('contact.description') }}
        </p>

        <div class="contact-cta">
          <h3 class="cta-title">{{ t('contact.cta') }}</h3>
          <div class="cta-buttons">
            <v-btn
              size="x-large"
              color="primary"
              variant="outlined"
              :href="`mailto:${SOCIAL_LINKS.email}`"
              class="contact-btn"
            >
              <v-icon left>mdi-email</v-icon>
              {{ t('contact.via.email') }}
            </v-btn>

            <v-btn
              size="x-large"
              color="success"
              variant="outlined"
              :href="SOCIAL_LINKS.whatsapp"
              target="_blank"
              class="contact-btn"
            >
              <v-icon left>mdi-whatsapp</v-icon>
              {{ t('contact.via.whatsapp') }}
            </v-btn>

            <v-btn
              size="x-large"
              color="info"
              variant="outlined"
              :href="SOCIAL_LINKS.linkedin"
              target="_blank"
              class="contact-btn"
            >
              <v-icon left>mdi-linkedin</v-icon>
              {{ t('contact.via.linkedin') }}
            </v-btn>
          </div>
        </div>

        <v-row class="mt-12">
          <v-col cols="12" md="4" v-for="info in contactInfo" :key="info.type">
            <div class="info-card">
              <v-icon size="large" color="primary">{{ info.icon }}</v-icon>
              <div class="info-content">
                <h4>{{ info.label }}</h4>
                <p>{{ info.value }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { SOCIAL_LINKS } from '@/utils/constants'

const { t } = useI18n()
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.2 })

const contactInfo = computed(() => [
  {
    type: 'phone',
    icon: 'mdi-phone',
    label: 'Phone',
    value: t('contact.info.phone')
  },
  {
    type: 'email',
    icon: 'mdi-email',
    label: 'Email',
    value: t('contact.info.email')
  },
  {
    type: 'location',
    icon: 'mdi-map-marker',
    label: 'Location',
    value: t('contact.info.location')
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.contact-section {
  min-height: 100vh;
  padding: $spacing-xxl 0;
  background: $void-black;
}

.section-title {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-size: $font-size-3xl;
  font-weight: 700;
  color: #fff;
  margin-bottom: $spacing-md;

  .title-number {
    color: $neon-cyan;
    font-family: $font-family-mono;
    font-size: $font-size-xl;
  }

  .title-line {
    flex: 1;
    height: 1px;
    background: rgba(61, 242, 224, 0.3);
    max-width: 300px;
  }
}

.contact-description {
  font-size: $font-size-lg;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin: 0 auto $spacing-xl;
}

.contact-cta {
  text-align: center;
  margin: $spacing-xxl 0;
}

.cta-title {
  font-size: $font-size-2xl;
  font-weight: 700;
  color: #fff;
  margin-bottom: $spacing-xl;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-lg;
  justify-content: center;
  align-items: center;
}

.contact-btn {
  min-width: 200px;
  font-weight: 600;
  transition: all $transition-normal;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-neon;
  }
}

.info-card {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  background: $void-black-light;
  border: 1px solid rgba(61, 242, 224, 0.2);
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  transition: all $transition-normal;
  height: 100%;

  &:hover {
    border-color: $neon-cyan;
    box-shadow: $shadow-neon;
    transform: translateY(-5px);
  }
}

.info-content {
  h4 {
    color: #fff;
    font-size: $font-size-lg;
    font-weight: 600;
    margin-bottom: $spacing-xs;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: $font-size-base;
    margin: 0;
    word-break: break-word;
  }
}

@media (max-width: 960px) {
  .cta-buttons {
    flex-direction: column;
  }

  .contact-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>

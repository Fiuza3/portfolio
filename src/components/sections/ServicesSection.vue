<template>
  <section id="services" ref="targetRef" class="services-section">
    <v-container>
      <div :class="{ 'animate-fade-in-up': isVisible }">
        <h2 class="section-title">
          <span class="title-number">04.</span>
          {{ t('services.title') }}
          <span class="title-line"></span>
        </h2>

        <p class="section-subtitle">{{ t('services.subtitle') }}</p>

        <v-row class="mt-8">
          <v-col
            v-for="(service, index) in t('services.items')"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card class="service-card" elevation="0">
              <v-card-title class="service-title">
                <v-icon :color="service.color" size="x-large">
                  {{ service.icon }}
                </v-icon>
                <h3>{{ service.name }}</h3>
              </v-card-title>

              <v-card-text>
                <p class="service-description">{{ service.description }}</p>

                <div class="service-features">
                  <div
                    v-for="(feature, idx) in service.features"
                    :key="idx"
                    class="feature-item"
                  >
                    <v-icon size="small" :color="service.color">mdi-check-circle</v-icon>
                    <span>{{ feature }}</span>
                  </div>
                </div>

                <v-btn
                  :color="service.color"
                  variant="outlined"
                  block
                  class="mt-4"
                  :href="`https://wa.me/5531972379038?text=Olá! Gostaria de saber mais sobre ${service.name}`"
                  target="_blank"
                >
                  Solicitar Orçamento
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { t } = useI18n()
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.1 })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.services-section {
  min-height: 100vh;
  padding: $spacing-xxl 0;
  background: $void-black-light;
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

.section-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: $font-size-lg;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: $spacing-xl;
}

.service-card {
  background: $void-black !important;
  border: 1px solid rgba(61, 242, 224, 0.2);
  border-radius: $border-radius-lg;
  height: 100%;
  transition: all $transition-normal;

  &:hover {
    border-color: $neon-cyan;
    box-shadow: $shadow-neon;
    transform: translateY(-5px);
  }
}

.service-title {
  color: #fff;
  font-size: $font-size-xl;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-md;
  text-align: center;
  padding-top: $spacing-lg;

  h3 {
    font-size: $font-size-xl;
    margin: 0;
  }
}

.service-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: $spacing-lg;
  text-align: center;
}

.service-features {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
  margin-bottom: $spacing-lg;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: $spacing-xs;
  color: rgba(255, 255, 255, 0.8);
  font-size: $font-size-sm;
  line-height: 1.5;
}

.service-pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-md;
  background: rgba(61, 242, 224, 0.05);
  border-radius: $border-radius-md;
  margin-bottom: $spacing-md;

  .pricing-label {
    color: rgba(255, 255, 255, 0.6);
    font-size: $font-size-sm;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .pricing-value {
    color: $neon-cyan;
    font-size: $font-size-xl;
    font-weight: 700;
    font-family: $font-family-mono;
  }
}
</style>

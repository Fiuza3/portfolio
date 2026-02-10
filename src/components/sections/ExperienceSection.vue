<template>
  <section id="experience" ref="targetRef" class="experience-section">
    <v-container>
      <div :class="{ 'animate-fade-in-up': isVisible }">
        <h2 class="section-title">
          <span class="title-number">02.</span>
          {{ t('experience.title') }}
          <span class="title-line"></span>
        </h2>

        <v-timeline side="end" class="experience-timeline">
          <v-timeline-item
            v-for="(job, index) in t('experience.jobs')"
            :key="index"
            :dot-color="index === 0 ? 'primary' : 'surface'"
            size="small"
          >
            <template v-slot:opposite>
              <div class="job-period">{{ job.period }}</div>
            </template>

            <v-card class="job-card" elevation="0">
              <v-card-title class="job-title">
                {{ job.role }}
              </v-card-title>
              
              <v-card-subtitle class="job-company">
                <v-icon size="small" color="primary">mdi-domain</v-icon>
                {{ job.company }}
                <v-chip size="small" class="ml-2" color="primary" variant="outlined">
                  {{ job.type }}
                </v-chip>
              </v-card-subtitle>

              <v-card-text>
                <p class="job-description">{{ job.description }}</p>

                <div v-if="job.achievements" class="achievements mt-4">
                  <div
                    v-for="(achievement, idx) in job.achievements"
                    :key="idx"
                    class="achievement-item"
                  >
                    <v-icon size="small" color="primary">mdi-chevron-right</v-icon>
                    <span>{{ achievement }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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

.experience-section {
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
  margin-bottom: $spacing-xl;

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

.experience-timeline {
  margin-top: $spacing-xl;
}

.job-period {
  font-family: $font-family-mono;
  font-size: $font-size-sm;
  color: $neon-cyan;
  font-weight: 500;
}

.job-card {
  background: $void-black !important;
  border: 1px solid rgba(61, 242, 224, 0.2);
  border-radius: $border-radius-lg;
  transition: all $transition-normal;

  &:hover {
    border-color: $neon-cyan;
    box-shadow: $shadow-neon;
    transform: translateX(5px);
  }
}

.job-title {
  color: #fff;
  font-size: $font-size-xl;
  font-weight: 700;
}

.job-company {
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: $spacing-xs;
}

.job-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: $spacing-md;
}

.achievements {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: $spacing-xs;
  color: rgba(255, 255, 255, 0.8);
  font-size: $font-size-sm;
  line-height: 1.5;
}

:deep(.v-timeline-item__body) {
  padding-bottom: $spacing-xl;
}
</style>

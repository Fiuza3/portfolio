<template>
  <section id="projects" ref="targetRef" class="projects-section">
    <v-container>
      <div :class="{ 'animate-fade-in-up': isVisible }">
        <h2 class="section-title">
          <span class="title-number">04.</span>
          {{ t('projects.title') }}
          <span class="title-line"></span>
        </h2>

        <v-row class="mt-8">
          <v-col
            v-for="(project, index) in t('projects.items')"
            :key="index"
            cols="12"
            md="6"
          >
            <v-card class="project-card" elevation="0">
              <div class="project-header">
                <v-icon size="large" color="primary">mdi-folder-open</v-icon>
                <div class="project-links">
                  <v-btn
                    icon
                    size="small"
                    variant="text"
                    color="primary"
                  >
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    size="small"
                    variant="text"
                    color="primary"
                  >
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-btn>
                </div>
              </div>

              <v-card-title class="project-name">
                {{ project.name }}
              </v-card-title>

              <v-card-text>
                <p class="project-description">
                  {{ project.description }}
                </p>

                <div class="project-tech mt-4">
                  <v-chip
                    v-for="(tech, idx) in project.tech"
                    :key="idx"
                    size="small"
                    variant="outlined"
                    color="primary"
                    class="tech-chip"
                  >
                    {{ tech }}
                  </v-chip>
                </div>

                <div class="project-highlights mt-4">
                  <div
                    v-for="(highlight, idx) in project.highlights"
                    :key="idx"
                    class="highlight-item"
                  >
                    <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                    <span>{{ highlight }}</span>
                  </div>
                </div>
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
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.2 })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.projects-section {
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

.project-card {
  background: $void-black !important;
  border: 1px solid rgba(61, 242, 224, 0.2);
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  height: 100%;
  transition: all $transition-normal;

  &:hover {
    border-color: $neon-cyan;
    box-shadow: $shadow-neon;
    transform: translateY(-10px);
  }
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-md;
}

.project-links {
  display: flex;
  gap: $spacing-xs;
}

.project-name {
  color: #fff;
  font-size: $font-size-xl;
  font-weight: 700;
  padding: 0;
  margin-bottom: $spacing-sm;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-xs;
}

.tech-chip {
  color: #fff !important;
  font-family: $font-family-mono;
  font-size: $font-size-xs;
}

.project-highlights {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  color: rgba(255, 255, 255, 0.8);
  font-size: $font-size-sm;
}
</style>

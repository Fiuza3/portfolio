<template>
  <section id="skills" ref="targetRef" class="skills-section">
    <v-container>
      <div :class="{ 'animate-fade-in-up': isVisible }">
        <h2 class="section-title">
          <span class="title-number">03.</span>
          {{ t('skills.title') }}
          <span class="title-line"></span>
        </h2>

        <div class="skills-timeline-wrapper">
          <v-row>
            <v-col cols="12" md="6" class="left-column">
              <v-card class="skill-card" elevation="0">
                <v-card-title class="skill-category-title">
                  <v-icon color="primary" size="large">
                    mdi-monitor-dashboard
                  </v-icon>
                  {{ t('skills.categories.frontend.title') }}
                </v-card-title>
                <v-card-text>
                  <div :class="['skills-list', t('skills.categories.frontend.items').length > 5 ? 'two-columns' : '']">
                    <div
                      v-for="(skill, idx) in t('skills.categories.frontend.items')"
                      :key="idx"
                      class="skill-item"
                    >
                      <v-icon size="small" color="primary">mdi-chevron-right</v-icon>
                      <span>{{ skill }}</span>
                    </div>
                  </div>
                </v-card-text>
              </v-card>

              <v-card class="skill-card" elevation="0">
                <v-card-title class="skill-category-title">
                  <v-icon color="warning" size="large">
                    mdi-cog
                  </v-icon>
                  {{ t('skills.categories.devops.title') }}
                </v-card-title>
                <v-card-text>
                  <div :class="['skills-list', t('skills.categories.devops.items').length > 5 ? 'two-columns' : '']">
                    <div
                      v-for="(skill, idx) in t('skills.categories.devops.items')"
                      :key="idx"
                      class="skill-item"
                    >
                      <v-icon size="small" color="warning">mdi-chevron-right</v-icon>
                      <span>{{ skill }}</span>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="right-column">
              <v-card class="skill-card" elevation="0">
                <v-card-title class="skill-category-title">
                  <v-icon color="success" size="large">
                    mdi-server
                  </v-icon>
                  {{ t('skills.categories.backend.title') }}
                </v-card-title>
                <v-card-text>
                  <div :class="['skills-list', t('skills.categories.backend.items').length > 5 ? 'two-columns' : '']">
                    <div
                      v-for="(skill, idx) in t('skills.categories.backend.items')"
                      :key="idx"
                      class="skill-item"
                    >
                      <v-icon size="small" color="success">mdi-chevron-right</v-icon>
                      <span>{{ skill }}</span>
                    </div>
                  </div>
                </v-card-text>
              </v-card>

              <v-card class="skill-card" elevation="0">
                <v-card-title class="skill-category-title">
                  <v-icon color="error" size="large">
                    mdi-chart-timeline-variant
                  </v-icon>
                  {{ t('skills.categories.methodologies.title') }}
                </v-card-title>
                <v-card-text>
                  <div :class="['skills-list', t('skills.categories.methodologies.items').length > 5 ? 'two-columns' : '']">
                    <div
                      v-for="(skill, idx) in t('skills.categories.methodologies.items')"
                      :key="idx"
                      class="skill-item"
                    >
                      <v-icon size="small" color="error">mdi-chevron-right</v-icon>
                      <span>{{ skill }}</span>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { t } = useI18n()
const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.2 })

const getCategoryIcon = (key) => {
  const icons = {
    frontend: 'mdi-monitor-dashboard',
    backend: 'mdi-server',
    devops: 'mdi-cog',
    methodologies: 'mdi-chart-timeline-variant'
  }
  return icons[key] || 'mdi-code-tags'
}

const getCategoryColor = (key) => {
  const colors = {
    frontend: 'primary',
    backend: 'success',
    devops: 'warning',
    methodologies: 'error'
  }
  return colors[key] || 'primary'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.skills-section {
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

.skills-timeline-wrapper {
  margin-top: $spacing-xl;
  position: relative;
  padding-bottom: 80px;
}

.timeline-divider {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(61, 242, 224, 0.3);
  transform: translateX(-50%);
  z-index: 0;
}

.left-column,
.right-column {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.left-column {
  padding-top: 40px;
}

.right-column {
  padding-top: 240px;
}

.skill-card {
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

.skill-category-title {
  color: #fff;
  font-size: $font-size-xl;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: $spacing-md;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;

  &.two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-sm $spacing-md;
  }
}

.skill-item {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  color: rgba(255, 255, 255, 0.8);
  font-size: $font-size-sm;
  line-height: 1.5;
  transition: all $transition-fast;

  &:hover {
    color: $neon-cyan;
    transform: translateX(5px);
  }
}
</style>

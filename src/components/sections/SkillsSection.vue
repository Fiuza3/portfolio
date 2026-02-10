<template>
  <section id="skills" ref="targetRef" class="skills-section">
    <v-container>
      <div :class="{ 'animate-fade-in-up': isVisible }">
        <h2 class="section-title">
          <span class="title-number">03.</span>
          {{ t('skills.title') }}
          <span class="title-line"></span>
        </h2>

        <v-row class="mt-8">
          <v-col
            v-for="(category, key) in t('skills.categories')"
            :key="key"
            cols="12"
            sm="6"
            md="3"
          >
            <div class="skill-category">
              <div class="category-header">
                <v-icon :color="getCategoryColor(key)" size="large">
                  {{ getCategoryIcon(key) }}
                </v-icon>
                <h3 class="category-title">{{ category.title }}</h3>
              </div>

              <div class="skills-list">
                <v-chip
                  v-for="(skill, index) in category.items"
                  :key="index"
                  class="skill-chip"
                  variant="outlined"
                  :color="getCategoryColor(key)"
                >
                  {{ skill }}
                </v-chip>
              </div>
            </div>
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
    methodologies: 'info'
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

.skill-category {
  background: $void-black-light;
  border: 1px solid rgba(61, 242, 224, 0.2);
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  height: 100%;
  transition: all $transition-normal;

  &:hover {
    border-color: $neon-cyan;
    box-shadow: $shadow-neon;
    transform: translateY(-5px);
  }
}

.category-header {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  margin-bottom: $spacing-lg;
}

.category-title {
  font-size: $font-size-xl;
  font-weight: 600;
  color: #fff;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
}

.skill-chip {
  color: #fff !important;
  transition: all $transition-normal;

  &:hover {
    transform: scale(1.05);
    box-shadow: $shadow-sm;
  }
}
</style>

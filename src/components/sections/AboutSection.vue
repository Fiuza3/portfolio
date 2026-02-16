<template>
  <section id="about" ref="targetRef" class="about-section">
    <v-container>
      <div :class="{ 'animate-fade-in-up': isVisible }">
        <h2 class="section-title">
          <span class="title-number">01.</span>
          {{ t('about.title') }}
          <span class="title-line"></span>
        </h2>

        <v-row align="center" class="mt-8">
          <v-col cols="12" md="8">
            <p class="about-text" v-html="t('about.description')">
            </p>

            <div class="about-info mt-6">
              <div class="info-item">
                <v-icon color="primary">mdi-map-marker</v-icon>
                <span>{{ t('about.location') }}</span>
              </div>
              <div class="info-item">
                <v-icon color="primary">mdi-briefcase-check</v-icon>
                <span>{{ t('about.availability') }}</span>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <div class="profile-card">
              <div class="profile-image">
                <img src="/Marcus-Fiuza.jpg" alt="Marcus Fiuza" class="profile-photo" />
                <div class="profile-border"></div>
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="certifications mt-8">
          <h3 class="subsection-title">{{ t('certifications.title') }}</h3>
          <v-chip
            v-for="(cert, index) in t('certifications.items')"
            :key="index"
            class="cert-chip ma-2"
            variant="outlined"
            color="primary"
          >
            <v-icon left size="small">mdi-certificate</v-icon>
            {{ cert }}
          </v-chip>
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
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.about-section {
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

.about-text {
  font-size: $font-size-lg;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);

  :deep(a) {
    color: $neon-cyan;
    text-decoration: none;
    font-weight: 600;
    transition: all $transition-fast;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: $neon-cyan;
    }
  }
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.info-item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  font-size: $font-size-base;
  color: rgba(255, 255, 255, 0.9);
}

.profile-card {
  position: relative;
  display: inline-block;
}

.profile-image {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto;

  .profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $border-radius-xl;
    position: relative;
    z-index: 1;
    filter: grayscale(100%);
    transition: filter $transition-normal;

    &:hover {
      filter: grayscale(0%);
    }
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    background: $void-black-light;
    border-radius: $border-radius-xl;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .profile-border {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid $neon-cyan;
    border-radius: $border-radius-xl;
    z-index: 0;
    transition: all $transition-normal;
  }

  &:hover .profile-border {
    top: 10px;
    left: 10px;
  }
}

.subsection-title {
  font-size: $font-size-xl;
  font-weight: 600;
  color: #fff;
  margin-bottom: $spacing-md;
}

.cert-chip {
  border-color: $neon-cyan !important;
  color: #fff !important;
  transition: all $transition-normal;

  &:hover {
    background: rgba(61, 242, 224, 0.1) !important;
    transform: translateY(-2px);
  }
}
</style>

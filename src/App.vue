<template>
  <v-app>
    <AuroraBackground />
    <ParticleField />
    <div class="grain-overlay"></div>
    <AppHeader />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AuroraBackground from '@/components/effects/AuroraBackground.vue'
import ParticleField from '@/components/effects/ParticleField.vue'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

onMounted(() => {
  languageStore.initializeLanguage()
})
</script>

<style lang="scss">
@use '@/assets/styles/variables.scss' as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: $font-body;
  background: $bg-primary;
  color: $text-primary;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.grain-overlay {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  animation: grain 8s steps(10) infinite;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: $bg-primary;
}

::-webkit-scrollbar-thumb {
  background: rgba(124, 58, 237, 0.4);
  border-radius: 3px;

  &:hover {
    background: rgba(124, 58, 237, 0.6);
  }
}

.v-application {
  background: transparent !important;
}

.v-container {
  max-width: 1200px !important;
}

a {
  color: $accent-cyan;
  text-decoration: none;
  transition: color $transition-fast;

  &:hover {
    color: $accent-violet;
  }
}

::selection {
  background: rgba(124, 58, 237, 0.3);
  color: $text-primary;
}
</style>

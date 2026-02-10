<template>
  <v-app>
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
  font-family: $font-family-primary;
  background: $void-black;
  color: #fff;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $void-black-dark;
}

::-webkit-scrollbar-thumb {
  background: $neon-cyan;
  border-radius: 5px;
  
  &:hover {
    background: $neon-cyan-light;
  }
}

.v-application {
  background: $void-black !important;
}

.v-container {
  max-width: 1400px !important;
}
</style>

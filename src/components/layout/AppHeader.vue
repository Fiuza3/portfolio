<template>
  <v-app-bar
    :elevation="scrolled ? 8 : 0"
    :class="{ 'header-scrolled': scrolled }"
    class="app-header"
    fixed
    app
  >
    <v-container class="d-flex align-center">
      <v-app-bar-title class="logo" @click="scrollToTop">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">MF</span>
        <span class="logo-bracket">/&gt;</span>
      </v-app-bar-title>

      <v-spacer />

      <div class="nav-links d-none d-md-flex">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
        >
          {{ t(`nav.${item.id}`) }}
        </a>
      </div>

      <LanguageSelector class="ml-4" />

      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="mobile-drawer"
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        @click="drawer = false"
      >
        <v-list-item-title>{{ t(`nav.${item.id}`) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSelector from './LanguageSelector.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const scrolled = ref(false)
const drawer = ref(false)

const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'skills' },
  { id: 'services' },
  { id: 'projects' },
  { id: 'contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.app-header {
  background: rgba(11, 15, 20, 0.8) !important;
  backdrop-filter: blur(10px);
  transition: all $transition-normal;

  &.header-scrolled {
    background: rgba(11, 15, 20, 0.95) !important;
    box-shadow: 0 4px 20px rgba(61, 242, 224, 0.1) !important;
  }
}

.logo {
  cursor: pointer;
  font-family: $font-family-mono;
  font-size: $font-size-xl;
  font-weight: 700;
  user-select: none;

  .logo-bracket {
    color: $neon-cyan;
  }

  .logo-text {
    color: #fff;
    margin: 0 4px;
  }

  &:hover .logo-text {
    animation: glitch 0.3s ease-in-out;
  }
}

.nav-links {
  gap: $spacing-lg;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: $font-size-sm;
  font-weight: 500;
  position: relative;
  padding: $spacing-xs 0;
  transition: color $transition-fast;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: $neon-cyan;
    transition: width $transition-normal;
  }

  &:hover {
    color: $neon-cyan;

    &::after {
      width: 100%;
    }
  }
}

.mobile-drawer {
  background: $void-black-light !important;
}
</style>

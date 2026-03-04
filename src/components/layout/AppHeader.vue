<template>
  <header :class="['app-header', { scrolled }]">
    <div class="header-inner">
      <a class="logo" href="#home" @click.prevent="scrollToTop">
        <span class="logo-mark">M</span>
        <span class="logo-dot"></span>
      </a>

      <nav class="nav-links d-none d-md-flex">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
        >
          <span class="nav-text">{{ t(`nav.${item.id}`) }}</span>
        </a>
      </nav>

      <div class="header-actions">
        <LanguageSelector />
        <button class="mobile-toggle d-md-none" @click="drawer = !drawer" aria-label="Menu">
          <span class="toggle-line" :class="{ open: drawer }"></span>
          <span class="toggle-line" :class="{ open: drawer }"></span>
        </button>
      </div>
    </div>
  </header>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="mobile-drawer"
    width="300"
  >
    <div class="drawer-content">
      <div class="drawer-header">
        <span class="drawer-logo">MF</span>
        <button class="drawer-close" @click="drawer = false">
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
      <nav class="drawer-nav">
        <a
          v-for="(item, index) in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="drawer-link"
          :style="{ animationDelay: `${index * 0.05}s` }"
          @click="drawer = false"
        >
          <span class="drawer-link-number">0{{ index + 1 }}</span>
          <span class="drawer-link-text">{{ t(`nav.${item.id}`) }}</span>
        </a>
      </nav>
      <div class="drawer-footer">
        <a :href="`mailto:${SOCIAL_LINKS.email}`" class="drawer-email">{{ SOCIAL_LINKS.email }}</a>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSelector from './LanguageSelector.vue'
import { useI18n } from '@/composables/useI18n'
import { SOCIAL_LINKS } from '@/utils/constants'

const { t } = useI18n()
const scrolled = ref(false)
const drawer = ref(false)
const activeSection = ref('home')

const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'skills' },
  { id: 'architecture' },
  { id: 'projects' },
  { id: 'contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50

  const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
  for (let i = sections.length - 1; i >= 0; i--) {
    const rect = sections[i].getBoundingClientRect()
    if (rect.top <= 200) {
      activeSection.value = navItems[i].id
      break
    }
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-fixed;
  padding: $space-5 0;
  transition: all 0.4s $ease-out-expo;

  &.scrolled {
    padding: $space-3 0;
    background: $glass-bg-heavy;
    backdrop-filter: $glass-blur;
    -webkit-backdrop-filter: $glass-blur;
    border-bottom: 1px solid $glass-border;
  }
}

.header-inner {
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 $space-8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: $space-1;
  text-decoration: none;

  .logo-mark {
    font-family: $font-display;
    font-size: $fs-2xl;
    font-weight: $fw-extrabold;
    color: $text-primary;
    letter-spacing: -0.02em;
    transition: color $transition-normal;
  }

  .logo-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $accent-violet;
    margin-top: auto;
    margin-bottom: 6px;
    transition: background $transition-normal;
  }

  &:hover {
    .logo-mark { color: $accent-violet; }
    .logo-dot { background: $accent-cyan; }
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: $space-1;
}

.nav-link {
  padding: $space-2 $space-4;
  color: $text-secondary;
  text-decoration: none;
  font-family: $font-body;
  font-size: $fs-sm;
  font-weight: $fw-medium;
  border-radius: $radius-md;
  transition: all $transition-normal;

  &:hover {
    color: $text-primary;
    background: rgba(124, 58, 237, 0.08);
  }

  &.active {
    color: $accent-violet;
    background: rgba(124, 58, 237, 0.1);
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: $space-4;
}

.mobile-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: $space-2;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 32px;

  .toggle-line {
    display: block;
    width: 100%;
    height: 2px;
    background: $text-primary;
    border-radius: 2px;
    transition: all 0.3s $ease-out-expo;

    &:first-child { transform-origin: left; }
    &:last-child { transform-origin: left; width: 60%; }
    &.open:first-child { transform: rotate(45deg); }
    &.open:last-child { transform: rotate(-45deg); width: 100%; }
  }
}

.mobile-drawer {
  background: $bg-secondary !important;
  border-left: 1px solid $border-subtle !important;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: $space-8;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $space-12;
}

.drawer-logo {
  font-family: $font-display;
  font-size: $fs-xl;
  font-weight: $fw-extrabold;
  color: $text-primary;
}

.drawer-close {
  background: none;
  border: 1px solid $border-subtle;
  color: $text-secondary;
  width: 40px;
  height: 40px;
  border-radius: $radius-md;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    border-color: $accent-violet;
    color: $accent-violet;
  }
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: $space-2;
  flex: 1;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: $space-4;
  padding: $space-4;
  text-decoration: none;
  border-radius: $radius-md;
  transition: all $transition-normal;
  animation: fadeInRight 0.4s $ease-out-expo both;

  &:hover {
    background: rgba(124, 58, 237, 0.08);
    transform: translateX(4px);
  }

  .drawer-link-number {
    font-family: $font-mono;
    font-size: $fs-xs;
    color: $accent-violet;
    min-width: 24px;
  }

  .drawer-link-text {
    font-family: $font-display;
    font-size: $fs-lg;
    font-weight: $fw-semibold;
    color: $text-primary;
    text-transform: capitalize;
  }
}

.drawer-footer {
  padding-top: $space-8;
  border-top: 1px solid $border-subtle;
}

.drawer-email {
  font-family: $font-mono;
  font-size: $fs-sm;
  color: $text-tertiary;
  text-decoration: none;
  transition: color $transition-fast;

  &:hover { color: $accent-cyan; }
}
</style>

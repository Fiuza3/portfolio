<template>
  <div class="home-view">
    <HeroSection />
    <AboutSection v-if="showSections" />
    <ExperienceSection v-if="showSections" />
    <SkillsSection v-if="showSections" />
    <ArchitectureSection v-if="showSections" />
    <ProjectsSection v-if="showSections" />
    <ContactSection v-if="showSections" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ArchitectureSection from '@/components/sections/ArchitectureSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const showSections = ref(false)

onMounted(() => {
  setTimeout(() => {
    showSections.value = true
  }, 100)

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  let konamiIndex = 0

  const handleKeydown = (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++
      if (konamiIndex === konamiCode.length) {
        document.body.style.animation = 'rainbow 2s linear infinite'
        konamiIndex = 0
      }
    } else {
      konamiIndex = 0
    }
  }

  const handleKeyCombo = (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
      console.log('%c Built with passion by Marcus Fiuza', 'color: #7c3aed; font-size: 20px; font-weight: bold;')
      console.log('%c Vue 3 + Vuetify + WebGL Architecture', 'color: #06b6d4; font-size: 14px;')
    }
  }

  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('keydown', handleKeyCombo)
})
</script>

<style lang="scss">
@keyframes rainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
</style>

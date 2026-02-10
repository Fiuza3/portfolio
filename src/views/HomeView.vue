<template>
  <div class="home-view">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

// Easter egg: Konami code
onMounted(() => {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  let konamiIndex = 0

  const handleKeydown = (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg()
        konamiIndex = 0
      }
    } else {
      konamiIndex = 0
    }
  }

  const activateEasterEgg = () => {
    console.log('🎮 Konami Code Activated! You found the secret!')
    document.body.style.animation = 'rainbow 2s linear infinite'
  }

  // Ctrl+Shift+K easter egg
  const handleKeyCombo = (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
      console.log('🔑 Secret Key Combo! Developer mode activated')
      console.log('%c Built with ❤️ by Marcus Fiuza', 'color: #3DF2E0; font-size: 20px; font-weight: bold;')
      console.log('%c Vue 3 + Vuetify + Pinia Architecture', 'color: #fff; font-size: 14px;')
    }
  }

  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('keydown', handleKeyCombo)

  return () => {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('keydown', handleKeyCombo)
  }
})
</script>

<style lang="scss">
@keyframes rainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
</style>

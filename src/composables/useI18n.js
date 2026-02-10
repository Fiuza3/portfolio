import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'

export function useI18n() {
  const languageStore = useLanguageStore()

  const t = (key) => languageStore.t(key)
  
  const currentLanguage = computed(() => languageStore.currentLanguage)
  
  const setLanguage = (lang) => languageStore.setLanguage(lang)

  return {
    t,
    currentLanguage,
    setLanguage
  }
}

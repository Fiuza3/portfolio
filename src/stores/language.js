import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

const STORAGE_KEY = 'portfolio_language'
const DEFAULT_LANGUAGE = 'en'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref(DEFAULT_LANGUAGE)
  const translations = { en, pt }

  const initializeLanguage = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const browserLang = navigator.language.split('-')[0]
    
    if (stored && translations[stored]) {
      currentLanguage.value = stored
    } else if (translations[browserLang]) {
      currentLanguage.value = browserLang
    }
  }

  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLanguage.value = lang
      localStorage.setItem(STORAGE_KEY, lang)
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  watch(currentLanguage, (newLang) => {
    document.documentElement.lang = newLang
  })

  return {
    currentLanguage,
    translations,
    initializeLanguage,
    setLanguage,
    t
  }
})

<template>
  <div class="lang-selector">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="['lang-btn', { active: currentLanguage === lang.code }]"
      @click="setLanguage(lang.code)"
    >
      {{ lang.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

const { currentLanguage, setLanguage } = useI18n()

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' }
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.lang-selector {
  display: flex;
  align-items: center;
  gap: $space-1;
  background: rgba(255, 255, 255, 0.04);
  border-radius: $radius-md;
  padding: 2px;
  border: 1px solid $border-subtle;
}

.lang-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: $space-1 $space-3;
  font-family: $font-mono;
  font-size: $fs-xs;
  font-weight: $fw-semibold;
  color: $text-tertiary;
  border-radius: $radius-sm;
  transition: all $transition-fast;
  letter-spacing: 0.05em;

  &:hover {
    color: $text-secondary;
  }

  &.active {
    color: $text-primary;
    background: rgba(124, 58, 237, 0.15);
  }
}
</style>

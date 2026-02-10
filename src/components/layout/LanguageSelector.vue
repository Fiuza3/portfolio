<template>
  <v-menu offset-y>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        variant="text"
        class="language-btn"
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-list class="language-list">
      <v-list-item
        v-for="lang in languages"
        :key="lang.code"
        :class="{ active: currentLanguage === lang.code }"
        @click="setLanguage(lang.code)"
      >
        <v-list-item-title>
          <span class="flag">{{ lang.flag }}</span>
          {{ lang.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

const { currentLanguage, setLanguage, t } = useI18n()

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.language-btn {
  color: #fff !important;

  &:hover {
    color: $neon-cyan !important;
  }
}

.language-list {
  background: $void-black-light !important;
  border: 1px solid rgba(61, 242, 224, 0.2);
}

.v-list-item {
  color: #fff;
  transition: all $transition-fast;

  &:hover {
    background: rgba(61, 242, 224, 0.1) !important;
    color: $neon-cyan;
  }

  &.active {
    background: rgba(61, 242, 224, 0.15) !important;
    color: $neon-cyan;
    border-left: 3px solid $neon-cyan;
  }
}

.flag {
  margin-right: $spacing-xs;
  font-size: $font-size-lg;
}
</style>

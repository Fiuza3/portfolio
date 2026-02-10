<template>
  <v-footer class="app-footer">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" class="text-center text-md-left">
          <div class="footer-logo">
            <span class="logo-bracket">&lt;</span>
            <span class="logo-text">Marcus Fiuza</span>
            <span class="logo-bracket">/&gt;</span>
          </div>
          <p class="footer-text mt-2">
            {{ t('footer.built') }}
          </p>
          <p class="footer-text cnpj">
            CNPJ: {{ BUSINESS_INFO.cnpj }}
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <div class="social-links">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :aria-label="social.name"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </a>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="text-center text-md-right">
          <p class="footer-text">
            © {{ currentYear }} Marcus Fiuza
          </p>
          <p class="footer-text">
            {{ t('footer.rights') }}
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" class="text-center">
          <p class="easter-egg-hint" @click="easterEggClick">
            {{ t('footer.easter') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { SOCIAL_LINKS, BUSINESS_INFO } from '@/utils/constants'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
const clickCount = ref(0)

const socials = [
  { name: 'GitHub', icon: 'mdi-github', url: SOCIAL_LINKS.github },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: SOCIAL_LINKS.linkedin },
  { name: 'WhatsApp', icon: 'mdi-whatsapp', url: SOCIAL_LINKS.whatsapp },
  { name: 'Email', icon: 'mdi-email', url: `mailto:${SOCIAL_LINKS.email}` }
]

const easterEggClick = () => {
  clickCount.value++
  if (clickCount.value === 3) {
    console.log('🎉 Easter Egg Found! Try pressing Ctrl+Shift+K')
    clickCount.value = 0
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.app-footer {
  background: $void-black-dark !important;
  border-top: 1px solid rgba(61, 242, 224, 0.2);
  padding: $spacing-xl 0;
  color: #fff;
}

.footer-logo {
  font-family: $font-family-mono;
  font-size: $font-size-lg;
  font-weight: 700;

  .logo-bracket {
    color: $neon-cyan;
  }

  .logo-text {
    color: #fff;
    margin: 0 4px;
  }
}

.footer-text {
  font-size: $font-size-sm;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;

  &.cnpj {
    font-family: $font-family-mono;
    font-size: $font-size-xs;
    margin-top: $spacing-xs;
  }
}

.social-links {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
}

.social-link {
  color: #fff;
  transition: all $transition-normal;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(61, 242, 224, 0.3);

  &:hover {
    color: $neon-cyan;
    border-color: $neon-cyan;
    box-shadow: $shadow-neon;
    transform: translateY(-3px);
  }
}

.easter-egg-hint {
  font-size: $font-size-xs;
  color: rgba(61, 242, 224, 0.5);
  cursor: pointer;
  transition: color $transition-fast;

  &:hover {
    color: $neon-cyan;
  }
}
</style>

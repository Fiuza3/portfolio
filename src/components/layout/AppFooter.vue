<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-logo">M<span class="logo-dot">.</span></span>
          <p class="footer-tagline">{{ t('footer.built') }}</p>
        </div>

        <div class="footer-social">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="social.name"
          >
            <v-icon size="18">{{ social.icon }}</v-icon>
          </a>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="footer-copy">
          &copy; {{ currentYear }} Marcus Fiuza. {{ t('footer.rights') }}
        </p>
        <p class="footer-cnpj">
          CNPJ: {{ BUSINESS_INFO.cnpj }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import { SOCIAL_LINKS, BUSINESS_INFO } from '@/utils/constants'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

const socials = [
  { name: 'GitHub', icon: 'mdi-github', url: SOCIAL_LINKS.github },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: SOCIAL_LINKS.linkedin },
  { name: 'WhatsApp', icon: 'mdi-whatsapp', url: SOCIAL_LINKS.whatsapp },
  { name: 'Email', icon: 'mdi-email-outline', url: `mailto:${SOCIAL_LINKS.email}` }
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.app-footer {
  position: relative;
  z-index: 2;
  padding: $space-12 $space-8 $space-8;
  border-top: 1px solid $border-subtle;
}

.footer-inner {
  max-width: $max-width;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $space-6;
}

.footer-brand {
  .footer-logo {
    font-family: $font-display;
    font-size: $fs-2xl;
    font-weight: $fw-extrabold;
    color: $text-primary;

    .logo-dot {
      color: $accent-violet;
    }
  }

  .footer-tagline {
    font-size: $fs-sm;
    color: $text-tertiary;
    margin-top: $space-1;
  }
}

.footer-social {
  display: flex;
  gap: $space-2;
}

.social-link {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $radius-md;
  border: 1px solid $border-subtle;
  color: $text-tertiary;
  text-decoration: none;
  transition: all $transition-normal;

  &:hover {
    color: $accent-violet;
    border-color: rgba(124, 58, 237, 0.3);
    background: rgba(124, 58, 237, 0.06);
    transform: translateY(-2px);
  }
}

.footer-divider {
  height: 1px;
  background: $border-subtle;
  margin-bottom: $space-6;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-copy {
  font-size: $fs-sm;
  color: $text-tertiary;
}

.footer-cnpj {
  font-family: $font-mono;
  font-size: $fs-xs;
  color: $text-tertiary;
  opacity: 0.6;
}

@media (max-width: $bp-md) {
  .footer-top {
    flex-direction: column;
    gap: $space-6;
    text-align: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: $space-2;
    text-align: center;
  }
}
</style>

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './assets/styles/variables.scss'
import './assets/styles/animations.scss'

import App from './App.vue'
import router from './router'
import { COLORS } from './utils/constants'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: COLORS.bgPrimary,
          surface: COLORS.bgSecondary,
          primary: COLORS.accentViolet,
          secondary: COLORS.accentCyan,
          accent: COLORS.accentBlue,
          info: COLORS.accentCyan,
          error: '#ef4444',
          success: '#10b981',
          warning: '#f59e0b'
        }
      }
    }
  }
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['vuetify-nuxt-module'],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'mamaInformada',
        themes: {
          mamaInformada: {
            dark: false,
            colors: {
              primary: '#1e4238',
              secondary: '#87a895',
              accent: '#87a895',
              success: '#4caf50',
              info: '#2196f3',
              warning: '#ff9800',
              error: '#f44336',
            },
          },
        },
      },
    },
  },

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },
})

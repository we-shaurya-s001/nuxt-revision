// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Shauryas site',
      meta: [
        {name : 'description', content: 'Everything about Nuxt3'}
      ],
      link: [
        {rel: 'stylesheet', href: '  '}
      ]
    }
  }
})

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
    routeRules: {
    '/': { prerender: true },
    '/products/**': { isr: 3600 },

    '/cart/**': { ssr: true },

    '/admin/**': { ssr: false },
  }
,  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});


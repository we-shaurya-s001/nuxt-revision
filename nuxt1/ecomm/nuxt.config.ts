import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
 compatibilityDate: "2025-07-15",
   routeRules: {
   '/about': { prerender: true },
   '/products/**': { isr: 3600 },
   '/admin/**': { ssr: false },
   '/ecomm/server/api/posts.js': {ssr: true}
 }
,  devtools: { enabled: true },
 css: ['./app/assets/css/main.css'],
 vite: {
   plugins: [
   tailwindcss(),
  ],
},
});



// 1) Code splitting and enhanced communicanicatioon between comp

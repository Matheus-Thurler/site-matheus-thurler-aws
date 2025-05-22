import { name } from "happy-dom/lib/PropertySymbol.js";

export default defineNuxtConfig({
  app: 
    {
      head: {
        htmlAttrs: {
        lang: 'en' 
        }
      }
    },
    ssr: true,
    site: {
      url: 'https://matheusthurler.com.br',
      name: 'My personal Website'
    },

  tailwindcss: {
   cssPath: '~/assets/css/main.css',
 },

  sourcemap: false,

  modules: [
   '@nuxtjs/sitemap',
   '@nuxtjs/tailwindcss',
   '@nuxt/content',
   '@nuxtjs/color-mode',
   'nuxt-gtag',
   'nuxt-icon',
   '@nuxt/image-edge',
   '@stefanobartoletti/nuxt-social-share',
   '@nuxtjs/html-validator',
   '@nuxt/test-utils/module'
  ],

  colorMode: {
      classSuffix: '',
      storageKey: 'nuxt-color-mode'
  },

  gtag: {
      id: 'G-G73F8VFQNC',
      config: {
        cookie_domain: 'auto',
      }
},

  socialShare: {
  baseUrl: 'https://www.matheusthurler.com.br'
},

  content: {
  highlight: {
    theme: 'github-dark'
  },
  markdown: {
    anchorLinks: false
  },
},

  nitro: {
      prerender: {
      routes: ['/sitemap.xml'],
      failOnError: false,
      crawlLinks: true,
      },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  compatibilityDate: '2025-03-11'
})
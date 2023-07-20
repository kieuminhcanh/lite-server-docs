// import AutoImport from 'unplugin-auto-import/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import Components from 'unplugin-vue-components/vite';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Lite Server',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
        },
      ],
      meta: [
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Lite Server' },
        {
          hid: 'og-desc',
          property: 'og:description',
          content: 'Lite Server is an amazing web server.',
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://liteserver.dev',
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: 'https://liteserver.dev/main.png',
        },
      ],
    },
  },

  css: ['@/assets/main.css'],
  build: {
    transpile: ['vuetify'],
  },
});

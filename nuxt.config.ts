// import AutoImport from 'unplugin-auto-import/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import Components from 'unplugin-vue-components/vite';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
        },
      ],
    },
  },
  css: ['@/assets/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  // vite: {
  //   plugins: [
  //     AutoImport({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //     Components({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //   ],
  // },
});

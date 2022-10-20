import 'vuetify/dist/vuetify.css';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createVuetify({
      components,
      directives,
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              background: '#f3f4f6',
              surface: '#FFFFFF',
              primary: '#1f2937',
              'primary-darken-1': '#f3f4f6',
              secondary: '#6366f1',
              'secondary-darken-1': '#111827',
              error: '#dc2626',
              'error-darken-1': '#b91c1c',
              info: '#2196F3',
              success: '#16a34a',
              warning: '#FB8C00',
            },
          },
        },
      },
    })
  );
});

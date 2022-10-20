<template>
  <v-layout class="fill-height">
    <v-app-bar color="primary" app>
      <v-container class="d-flex align-center">
        <v-btn variant="text"
          ><v-avatar
            image="/logo.png"
            size="32"
            @click="$router.push('/')"
          ></v-avatar
        ></v-btn>
        <h2 class="font-sans">Lite Server</h2>
        <v-spacer />
        <v-btn class="text-capitalize font-weight-medium" to="/" exact
          >Home</v-btn
        >
        <v-btn class="text-capitalize font-weight-medium" to="/about"
          >About</v-btn
        >
      </v-container>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-footer app class="pa-0 d-block" color="blue-grey-darken-4">
      <v-divider color="blue-grey-darken-2" />
      <v-container class="d-flex align-center py-2 text-caption">
        {{ new Date().getFullYear() }} — <strong>Ken Kieu</strong>

        <v-spacer></v-spacer>

        <v-btn
          class="mx-4"
          icon="mdi-github"
          variant="plain"
          size="small"
        ></v-btn>
      </v-container>
    </v-footer>
  </v-layout>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'bg-blue-grey-darken-4',
  },
});
</script>

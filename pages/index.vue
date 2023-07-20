<template>
  <v-container class="py-16">
    <v-card variant="text">
      <v-card-title class="text-h2 py-5 font-weight-bold"
        >Lite Server ⛵</v-card-title
      >
      <v-card-item class="text-body-1 text-grey-lighten-2"
        >I used Laragon for a long time. It's really a great app but It's only
        work on Windows. I wonder why I don't make this, extends this great app,
        more convinient and cross platform.</v-card-item
      >
      <v-card-item>
        <v-img src="/main.gif" />
      </v-card-item>
      <v-card-text class="my-10">
        <h2 class="text-h4 my-5 font-weight-bold">Features</h2>
        <v-row align="stretch">
          <v-col>
            <v-card variant="tonal" height="100%" rounded="lg">
              <v-card-title class="d-flex align-center font-weight-bold"
                ><v-icon size="x-small" start>mdi-lightning-bolt</v-icon>Lite &
                Fast
              </v-card-title>
              <v-card-text>
                Lite Server is only run with 4MB RAM, it's really
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card variant="tonal" height="100%" rounded="lg">
              <v-card-title class="d-flex align-center"
                ><v-icon size="x-small" start>mdi-cupcake</v-icon>
                Simple & Easy
              </v-card-title>
              <v-card-text>
                Simple and easy to use, just one click to start.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card variant="tonal" height="100%" rounded="lg">
              <v-card-title class="d-flex align-center"
                ><v-icon size="x-small" start>mdi-battery-charging</v-icon>
                Powerful & Flexible
              </v-card-title>
              <v-card-text>
                Cross platform app. You can use it on Windows, Linux and Mac OS
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="my-10">
        <h2 class="text-h4 my-5 font-weight-bold">Download</h2>
        <v-row align="stretch">
          <v-col cols="12" md="4">
            <v-list-item
              title="Microsoft Windows"
              subtitle="Windows 7 or later"
              prepend-avatar="/images/windows.png"
              href="/files/lite-server_0.0.1_x64_en-US.msi"
              target="_blank"
              class="py-5 rounded-lg"
              variant="elevated"
              color="success"
            ></v-list-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-list-item
              title="Mac OS: Soon"
              subtitle="Mac OS 10.10 or later"
              prepend-avatar="/images/mac.png"
              href="http://news.google.com"
              target="_blank"
              disabled
              class="py-5 rounded-lg"
              variant="tonal"
            ></v-list-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-list-item
              title="Linux: Soon"
              subtitle="Ubuntu 16.04 or later"
              prepend-avatar="/images/linux.png"
              href="http://news.google.com"
              target="_blank"
              disabled
              class="py-5 rounded-lg"
              variant="tonal"
            ></v-list-item>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

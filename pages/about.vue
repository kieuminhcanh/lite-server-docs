<template>
  <v-container class="fill-height">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="10" sm="12" md="10" lg="8" xl="6">
        <v-card color="transparent">
          <v-row no-gutters>
            <v-col cols="12" sm="5" md="4">
              <v-card
                density="compact"
                height="100%"
                class="text-center py-10 rounded-ts-sm rounded-te-none"
                variant="flat"
                rounded="0"
                color="primary"
              >
                <v-card-item>
                  <v-avatar size="90" image="https://picsum.photos/300/300" />
                </v-card-item>
                <v-card-title>Ken Kieu</v-card-title>
                <v-divider />
                <v-card-text class="text-caption">
                  Hi, I'm Ken Kieu. I'm a Fullstack Developer. I love to code
                  and make things.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="7" md="8">
              <v-card
                min-height="300"
                rounded="0"
                height="100%"
                variant="tonal"
                class="px-16 text-center"
              >
                <v-row align="center" justify="center" class="fill-height">
                  <p class="font-serif font-italic font-weight-thin">
                    I builded Lite Server to make it easier to manage your
                    projects. I hope you like it.
                  </p>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

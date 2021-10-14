<template>
  <v-card>
    <v-footer padless>
      <v-card flat class="text-center" width="100%">
        <v-card-title primary-title class="justify-center"
          >Get connected with us on social networks!</v-card-title
        >
        <v-card-text>
          <v-btn
            v-for="i in icons"
            :key="i"
            :to="i.link"
            :href="i.url"
            class="mx-4"
            icon
            link
          >
            <v-icon size="24px">{{ i.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0"
          >We are based in blah blah blah..
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} — Designed and Developed by a<strong>
            Human</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      {
        icon: 'mdi-facebook',
        url: 'https://www.facebook.com/',
        target: '_blank',
      },
      {
        icon: 'mdi-twitter',
        url: 'https://www.twitter.com/',
        target: '_blank',
      },
      {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/',
        target: '_blank',
      },
      {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/',
        target: '_blank',
      },
    ],
  }),
};
</script>

<style scoped>
</style>
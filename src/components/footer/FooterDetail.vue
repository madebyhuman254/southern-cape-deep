<template>
<v-card >
    <v-footer padless>
      <v-card flat   class=" text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="i in icons" 
            :key="i" 
            :to="i.link"
            class="mx-4" icon link>
            <v-icon size="24px">{{ i.icon }}</v-icon>
          </v-btn>
       </v-card-text>
      <v-card-text 
      class="pt-0"
      >We are based in blah blah blah..
      </v-card-text>
      <v-divider></v-divider>
        <v-card-text>
         {{ new Date().getFullYear() }} — 
         Designed and Developed by<strong> Yanga</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</v-card>
</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
      icons: [
        {
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/'
        },
        {
          icon: 'mdi-twitter',
          link: 'https://www.twitter.com/'
        },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/'
        },
        {
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/'
        }]
    }),
  }
</script>
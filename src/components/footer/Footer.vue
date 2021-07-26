<template>
<v-card >
    <v-footer padless>
      <v-card flat   class=" text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
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
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
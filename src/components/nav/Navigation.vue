<template>
      <v-app-bar
      app
      color="primary"
      dark
    >
    <v-tab to="/">Company Logo</v-tab>

    <v-spacer></v-spacer>

      <v-tab 
      v-for="(item, i) in items" 
      :key="i" 
      :to="item.link" link>
        <v-icon>{{item.icon}}</v-icon>
       {{item.text}}
      </v-tab>
    </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    items: [
      {
        icon: 'mdi-home-outline',
        text: 'Home',
        link: '/',
      },
      {
        icon: 'mdi-image-multiple-outline',
        text: 'Our Work',
        link: '/ourwork',
      },
      {
        icon: 'mdi-clipboard-list-outline',
        text: 'Services',
        link: '/services',
      },
      {
        icon: 'mdi-phone-outline',
        text: 'Contact',
        link: '/footer',
      },
    ]
  })
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #007be7;
}

.btn-qoute {
  border-radius: 2em;
  text-align: center;
  transition: all 0.2s;
  box-sizing: border-box;
  color: #007be7;
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  cursor: pointer;

}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

nav {
  width: 100%;
  height: 64px;
  padding: 12px;
  display: flex;
  background-color: #007be7;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>

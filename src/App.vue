<template>
  <div>
    <navigation></navigation>
    <main>
      <router-view></router-view>
    </main>
    <v-footer>
      <Footer />
    </v-footer>
  </div>
  <!-- <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view> -->
</template>

<script>
import Navigation from './components/nav/Navigation.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
:root {
  --nav-height: 64px;
}

* {
  box-sizing: border-box;
}

html,
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  background: #e5e5e5;
}

main {
  width: 1200px; /*800px before change*/
  margin: calc(var(--nav-height) + 40px) auto 0 auto;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

<template>
  <div>
    <section>
      <p>a sneak peek into our work</p>
      <h1>Our Work</h1>
    </section>
    <VueCompareImage leftImage='../assets/before-after-imgs/big-mattress-before.jpg'
    rightImage="../assets/before-after-imgs/big-mattress-after.jpg" />
    <router-view></router-view>
  </div>
</template>

<script>
import VueCompareImage from 'vue-compare-image';
export default {
  components: { VueCompareImage }
};
</script>

<style scoped>
h1{
  margin: 0;
  font-size: 35px;
}
p {
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  color:#666161;
  line-height: 120.6%;
  text-transform: uppercase;
}
</style>

<template>
  <div>
    <section>
      <p>these are some of our services we offer</p>
      <h1>Our Services</h1>
    </section>
    <!-- <section>
      <h1>UPHOLSTERY CLEANING</h1>
    </section>
    <section>
      <h1>PEST CONTROL</h1>
    </section> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
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

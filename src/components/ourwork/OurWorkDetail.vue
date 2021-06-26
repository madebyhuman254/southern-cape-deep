<template>
  <div>
    <section>
      <p>a sneak peek into our work</p>
      <h1>Our Work</h1>
    </section>
  <div style="max-width: 1000px">
    <compare-two-images 
    :leftImage="'../assets/before-after-imgs/big-mattress-before.jpg'"
    :rightImage="'../assets/before-after-imgs/big-mattress-after.jpg'"
    :leftImageOpacity="1"
    :labelsEnable="false"
    :dividerWidth="'4px'"
    :dividerWidthOnHover="'40px'"
    :dividerPosition="25"
    :adaptiveHeight="true"
    :showAnimateArrows="false"
    :dividerColor="'rgb(255, 94, 0)'" >
    </compare-two-images>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
import CompareTwoImages from 'vue-compare-two-images-component';
export default {
  components: { 
    CompareTwoImages 
    }
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

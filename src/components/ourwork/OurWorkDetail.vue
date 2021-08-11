<template>
  <div class="container">
    <section>
      <p>a sneak peek into our work</p>
      <h1>Our Work</h1>
    </section>
    <div class="gr">
<div class="compare-container">
  <div class="compare-container-images">
      <compare-two-images 
      style="flex-grow: 0"
      leftImage="'@/assets/images/matt-before.jpg'"
      rightImage="@/assets/images/matt-after.jpg"
      :leftImageOpacity="1"
      :labelsEnable="true"
      :dividerWidth="'4px'"
      :dividerWidthOnHover="'40px'"
      :dividerPosition="45"
      left-label="Before"
      right-label="After"
      :adaptiveHeight="true"
      :showAnimateArrows="false"
      :dividerColor="'#007be7'" >
      </compare-two-images>
  </div>
   <div class="content">
      <h3>Mattress</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis optio adipisci incidunt, molestias assumenda repellat minus reprehenderit, et recusandae quos doloremque quo enim soluta. Delectus perspiciatis pariatur placeat saepe asperiores.
      Cupiditate saepe, corporis atque a voluptates neque</p>
   </div>

   <div class="compare-container-images">
      <compare-two-images 
      style="flex-grow: 0"
      leftImage="https://via.placeholder.com/150"
      rightImage="https://via.placeholder.com/120"
      :leftImageOpacity="1"
      :labelsEnable="true"
      :dividerWidth="'4px'"
      :dividerWidthOnHover="'40px'"
      :dividerPosition="45"
      left-label="Before"
      right-label="After"
      :adaptiveHeight="true"
      :showAnimateArrows="false"
      :dividerColor="'#007be7'" >
      </compare-two-images>
  </div>
   <div class="content">
      <h3>Car Seats</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis optio adipisci incidunt, molestias assumenda repellat minus reprehenderit, et recusandae quos doloremque quo enim soluta. Delectus perspiciatis pariatur placeat saepe asperiores.
      Cupiditate saepe, corporis atque a voluptates neque </p>
   </div>

  </div>
  <!-- <div style="width: 400px; height: 500px">
 
 
    <compare-two-images for
    leftImage="https://via.placeholder.com/134"
    rightImage="https://via.placeholder.com/130"
    :leftImageOpacity="1"
    :labelsEnable="false"
    :dividerWidth="'4px'"
    :dividerWidthOnHover="'40px'"
    :dividerPosition="25"
    :adaptiveHeight="true"
    :showAnimateArrows="false"
    :dividerColor="'rgb(255, 94, 0)'" >
    </compare-two-images>
  </div> -->
    </div>
  </div>
</template>

<script>
import CompareTwoImages from 'vue-compare-two-images-component';
export default {
  components: { 
   CompareTwoImages: CompareTwoImages
    }
};
</script>

<style scoped>

img  {
  height: 100px;
  width: 100px;
}
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
.gr {
  display: flex;
  flex-direction: row;
  flex-grow: 0;
}
.compare-container {
  display: flex;
}

.compare-container .compare-container-images {
  width: 400px; flex-grow: 0; flex-shrink:0;
}

.compare-container .content {
  margin-left: 20px;
}
.compare-container .content h3{
  margin-bottom: 20px;
}
.compare-container .content p{

}
</style>

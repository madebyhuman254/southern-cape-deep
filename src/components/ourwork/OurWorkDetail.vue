<template>
  <div class="container">
    <section id="ourwork">
      <div class="theme-title-one">
      <p>a sneak peek into our work</p>
      <h1>Our Work</h1>
    </div>
  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-img
              src="@/assets/images/car-seat-before.jpg"
              max-height="325"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              <h4>Car Seat</h4>&nbsp;
							<p><b>before</b> deep cleaning.</p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card>
            <v-img
              src="@/assets/images/couch-before.jpg"
              max-height="325"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              <h4>Couch</h4>&nbsp;
							<p><b>before</b> deep cleaning.</p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card>
            <v-img
              src="@/assets/images/matt-before.jpg"
              max-height="325"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              <h4>Mattress</h4>&nbsp;
							<p><b>before</b> deep cleaning.</p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
         <v-card>
            <v-img
              src="@/assets/images/car-seat-after.jpg"
              max-height="325"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              <h4>Car Seat</h4>&nbsp;
							<p><b>after</b> deep cleaning.</p>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
         <v-card>
            <v-img
              src="@/assets/images/couch-after.jpg"
              max-height="325"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
             <h4>Couch</h4>&nbsp;
						<p><b>after</b> deep cleaning.</p>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
         <v-card>
            <v-img
              src="@/assets/images/matt-after.jpg"
              max-height="325"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              <h4>Mattress</h4>&nbsp;
						<p><b>after</b> deep cleaning.</p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>

      
    </section>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

.btn-work {
  border-radius: 2em;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s;
  box-sizing: border-box;
  color: #007be7;
  display: inline-block;
  padding: 0.7em 1.7em;
  margin: 0 0.5em 0.5em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  cursor: pointer;
  border-block-color: #007be7;
}
h1 {
  margin: 0;
  font-size: 45px;
  font-weight: bold;
}
h2 {
  margin: 0;
  font-size: 20px;
  text-transform: uppercase;
  color: #007be7;
  line-height: 120.6%;
  text-align: center;
}
h4 {
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  color: #666161;
  line-height: 120.6%;
  color: #007be7;
  line-height: 120.6%;
  text-transform: uppercase;
}
ul {
  list-style: none;
}
p {
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  color: #666161;
  line-height: 120.6%;
  text-transform: uppercase;
}
h5 {
  margin: 0;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
}
.tran4s,.single-solution-block .icon,.our-work-block .hover-content .text,.our-blog .single-blog .image-box img {
  transition: all .4s ease-in-out;
}
.our-work-block {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 40px;
}

.our-work-block img {width: 100%;border-radius: 5px;}
.our-work-block .hover-content {
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0,26,87,0.6);
  border-radius: 5px;
  -webkit-transform:scale(1,0);
          transform:scale(1,0);
}
.our-work-block:hover .hover-content {
  -webkit-transform:scale(1);
          transform:scale(1);
}
.our-work-block:hover .hover-content {
  -webkit-transform:scale(1);
          transform:scale(1);
}
.our-work-block .hover-content .text {
  position: absolute;
  width: 100%;
  left:0;
  bottom: 20px;
  padding: 0 28px;
  opacity: 0;
  transition-delay:0.2s;
  -webkit-transform:translateY(100px);
          transform:translateY(100px);
}
.our-work-block:hover .hover-content .text {
  -webkit-transform:translateY(0);
          transform:translateY(0);
  opacity: 1;
}
.our-work-block .hover-content .text h5 a {color: #fff;}
.our-work-block .hover-content .text p {font-size: 17px;color: #fff;}
.our-work-block .hover-content .text .details {
  width: 40px;
  height: 40px;
  line-height: 43px;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  color: #979797;
  font-size: 20px;
  margin-top: 7px;
}
.our-work-block .hover-content .text .details:hover {color: #fff;}
.view-all {text-align: center;margin-top: 60px;}
.wrapper .our-work-block {margin-top: 0;}
.our-work-block {margin-bottom: 40px;}
</style>

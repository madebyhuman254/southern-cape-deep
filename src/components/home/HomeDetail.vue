<template>
  <div>
    <section id="home" class="flex container pd--lg">
      <div>
        <p>We offer the best cleaning and pest control services</p>
        <h1>
          Delivering the finest <br />
          quality to your <br />
          doorstep
        </h1>
        <button class="btn btn-work" @click="goToWork()">Our Work</button>
      </div>
      <div style="padding-left: 10rem">
        <img class="img" src="@/assets/landing-page.png" alt="" srcset="" />
      </div>
    </section>
    <section id="about" class="container">
      <p>about the company...</p>
      <h1>About Us</h1>
     <div class="row no-gutters bg-light p-4 mb-4">
        <div class="col-12 col-lg-6 mb-4 mb-lg-0">
          <div class="row">
            <div class="col-12 col-sm-6 text-center">
              <img src="@/assets/images/300x300.png" class="img-fluid rounded-circle mb-4 mb-lg-0">
            </div>
            <div class="col-12 col-sm-6">
              <h2>What we do ?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis velit quis sapien sollicitudin ultrices. Ut metus tortor, aliquet non rutrum ac, dapibus vehicula augue. Etiam congue erat sem, vitae gravida nunc pretium vitae. Fusce sed ex tellus. </p>
              <button type="button" class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-12 col-sm-6 text-center">
              <img src="@/assets/images/300x300.png" class="img-fluid rounded-circle mb-4 mb-lg-0">
            </div>
            <div class="col-12 col-sm-6">
              <h2>Who we are ?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis velit quis sapien sollicitudin ultrices. Ut metus tortor, aliquet non rutrum ac, dapibus vehicula augue. Etiam congue erat sem, vitae gravida nunc pretium vitae. Fusce sed ex tellus. </p>
              <button type="button" class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  <div class="container">
    <section id="services">
      <div class="theme-title-one">
        <p>these are some of our services we offer</p>
        <h1>Our Services</h1>
      </div>
      <div class="wrapper">
        <div>
          <h2>Upholstery Cleaning</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="services-block">
              <img src="@/assets/images/svg/5.svg" alt="" class="icon" />
              <h4><u>Mattress Pricing</u></h4>
              <p>
                <ul>
                  <li><b>R300</b>/King size</li>
                  <li><b>R250</b>/Queen size</li>
                  <li><b>R250</b>/King size</li>
                  <li><b>R150</b>/Single size</li>
                </ul>
              </p>
            </div>
            <!-- /.services-block -->
          </div>
          <!-- /.col- -->
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="services-block">
              <img src="@/assets/images/svg/6.svg" alt="" class="icon" />
              <h4><u>Carpet Pricing</u></h4>
              <p>
                 <ul>
                  <li>From <b>R80</b></li>
                </ul>
              </p>
            </div>
            <!-- /.services-block -->
          </div>
          <!-- /.col- -->
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="services-block">
              <img src="@/assets/images/svg/7.svg" alt="" class="icon" />
              <h4><u>Car Seats Pricing</u></h4>
              <p>
                <ul>
                  <li><b>R300 </b>(Sedan, Hatchback)</li> 
                  <li><b>R300 </b>(Double Cab)</li>
                  <li><b>R200 </b>(Single Cab)</li>
                  <li><b>R500 </b>(Avanza)</li>
                </ul>
              </p>
            </div>
            <!-- /.services-block -->
          </div>
        </div> <!-- /.col -->
        <br>
          <div>
            <h2>Pest Control (Killing of cockroaches, ants, bedbugs)</h2>
          </div>
          <!-- /.col- -->
          <div class="row">
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="services-block">
              <img src="@/assets/images/svg/8.svg" alt="" class="icon" />
              <h4><u>House Pricing</u></h4>
              <p>
                <ul>
                  <li>From <b>R600</b></li>
                </ul>
              </p>
            </div>
            <!-- /.services-block -->
          </div>
          <!-- /.col- -->
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="services-block">
              <img src="@/assets/images/svg/9.svg" alt="" class="icon" />
              <h4><u>Flat Pricing</u></h4>
              <p>
                <ul>
                  <li>From <b>R400</b></li>
                </ul>
              </p>
            </div>
            <!-- /.services-block -->
          </div>
          <!-- /.col- -->
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="services-block">
              <img src="@/assets/images/svg/10.svg" alt="" class="icon" />
              <h4><u>Car Pricing</u></h4>
              <p>
                <ul>
                  <li>From <b>R200</b></li>
                </ul>
              </p>
            </div>
            <!-- /.services-block -->
          </div>
          <!-- /.col- -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.wrapper -->
    </section>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToWork() {
      this.$router.push('/ourwork');
    },
  },
};
</script>

<style scoped>
.hero {
  height: 80vh;
  display: flex;
  background: green;
  /* text-align: center; */
}
.img {
  object-fit: right;
  object-position: 5vw -5vmin;
  height: min(65vh, 500px);
  width: 80%;
  margin: 0;
}

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
  font-size: 15px;
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

/* Our work style */
h5 {
  margin: 0;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
}
.tran4s,
.single-solution-block .icon,
.our-work-block .hover-content .text,
.our-blog .single-blog .image-box img {
  transition: all 0.4s ease-in-out;
}
.our-work-block {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 40px;
}

.our-work-block img {
  width: 100%;
  border-radius: 5px;
}
.our-work-block .hover-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 26, 87, 0.6);
  border-radius: 5px;
  -webkit-transform: scale(1, 0);
  transform: scale(1, 0);
}
.our-work-block:hover .hover-content {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.our-work-block:hover .hover-content {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.our-work-block .hover-content .text {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20px;
  padding: 0 28px;
  opacity: 0;
  transition-delay: 0.2s;
  -webkit-transform: translateY(100px);
  transform: translateY(100px);
}
.our-work-block:hover .hover-content .text {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
.our-work-block .hover-content .text h5 a {
  color: #fff;
}
.our-work-block .hover-content .text p {
  font-size: 17px;
  color: #fff;
}
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
.our-work-block .hover-content .text .details:hover {
  color: #fff;
}
.view-all {
  text-align: center;
  margin-top: 60px;
}
.wrapper .our-work-block {
  margin-top: 0;
}
.our-work-block {
  margin-bottom: 40px;
}

/* Services Styles */
.tran4s,
.our-solution .services-block .icon,
.our-case .single-case-block .hover-content .text,
.our-blog .single-blog .image-box img {
  transition: all 0.4s ease-in-out;
}
.services-block {
  margin-top: 55px;
  text-align: center;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
.services-block .icon {
  margin: 0 auto;
  width: 90px;
  height: 90px;
  background: #99ccff;
  padding: 22px 17px;
  border-radius: 50%;
  transition: all 0.2s;
}
.services-block h5 {
  margin: 26px 0 10px 0;
}
.services-block p {
  padding: 0 22px;
}
.services-block:hover .icon {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* .image-container {
  margin: 20px;
} */
</style>

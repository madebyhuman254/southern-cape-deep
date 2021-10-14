<template>
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
</template>

<script>
export default {
  data: () => ({
    icons: [{ 
      link: '@/assets/images/icon/8.png',
     }]
  })
};
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 35px;
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
h5 {
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
</style>

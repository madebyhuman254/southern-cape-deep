<template>
  <div>
    <section class="flex container pd--lg">
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
    <section class="container">
      <p>about the company...</p>
      <h1>About Us</h1>
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        corporis maxime provident facere. Nesciunt odio, quia, minima fugit
        quisquam voluptatem incidunt, sint harum praesentium vero tempore sunt
        iure. Deleniti, officia?
      </span>
    </section>
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
  margin:0;
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
p {
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  color: #666161;
  line-height: 120.6%;
  text-transform: uppercase;
}

/* .image-container {
  margin: 20px;
} */
</style>

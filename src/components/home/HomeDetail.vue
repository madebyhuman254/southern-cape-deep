<template>
  <div>
    <section>
      <p>We offer the best cleaning and pest control services</p>
      <h1>Delivering the finest <br> quality to your <br> doorstep</h1>
    </section>
      <section>
        <button class="btn btn-work" @click="goToWork()">Our Work</button>
      </section>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToWork(){
      this.$router.push('/ourwork');
    }
  }
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
</style>

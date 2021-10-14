import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'img-comparison-slider';

Vue.use(BootstrapVue);

Vue.config.ignoredElements = [/img-comparison-slider/];


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

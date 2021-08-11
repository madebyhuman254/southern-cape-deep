import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import OurWork from '../pages/OurWork';
import Services from '../pages/Services';
import Footer from '../pages/Footer';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/ourwork', component: OurWork },
  { path: '/services', component: Services },
  { path: '/footer', component: Footer }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

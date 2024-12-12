import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/home.vue';
import About from '../view/about.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory('/VueFrontend_1/'), // Adj meg itt egy base path-t!
  routes
});

export default router;

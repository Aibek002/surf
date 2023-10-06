import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home-page/home-page.vue'; // Replace with your actual components
import About from './About.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
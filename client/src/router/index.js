import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/homeView.vue";


const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

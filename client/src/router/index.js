import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/homeView.vue";
import ChatView from "../views/chatView.vue";


const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'chatView',
    component: ChatView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

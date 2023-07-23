import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/landing.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/app_info.vue')
  },
  {
    path: '/stats',
    name: 'JokeStat',
    component: () => import( '../forms/primeTest_1.vue')
  },
  {
    path: '/fulljokelist',
    name: 'JokeList',
    component: () => import( '../forms/joke_list.vue')
  }
]
const router = createRouter({
//  history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})
export default router
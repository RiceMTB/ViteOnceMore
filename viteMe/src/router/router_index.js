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
  },
  {
    path: '/randomjoke',
    name: 'RandomJoke',
    component: () => import( '../views/randomJoke.vue')
  },
  {
    path: '/addJoke',
    name: 'addJoke',
    // my_title: 'This is a Test' // trying to get the pass title child to parent
    component: () => import( '../forms/joke_entry.vue')
  },
]
const router = createRouter({
//  history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})
export default router
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/landing.vue';
import formTitle from '/src/string_constants/fe_string.js';
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
    component: () => import( '../forms/joke_list.vue'),
    meta: { 
      form_title: "Joke List"
    },
  },
  {
    path: '/randomjoke',
    name: 'RandomJoke',
    meta: { 
      form_title: formTitle.form_title.random_joke
    },
    component: () => import( '../views/randomJoke.vue')
    
  },
  {
    path: '/addJoke',
    name: 'addJoke',
    meta: { 
      form_title: formTitle.form_title.enter_new_joke
    },
    component: () => import( '../forms/joke_entry.vue')
  },
  {
    path: '/bitCoin',
    name: 'bitCoin',
    meta: { 
      form_title: formTitle.form_title.bit_coin
    },
    component: () => import( '../views/bitcoinprice.vue')
  },
  {
    path: '/jokeByID',
    name: 'jokeByID',
    meta: { 
      form_title: "Get a joke by ID"
    },
    component: () => import( '../forms/jokebyID.vue')
  },
]
const router = createRouter({
//  history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})
export default router
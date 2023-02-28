import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search_data',
    name: 'search_data',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/show_data',
    name: 'show_data',
    component: () => import('../views/ShowView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

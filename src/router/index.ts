import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/main/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/:id',
    name: 'PaintingDetails', 
    component: () => import('../views/main/PaintingDetails.vue')
  },
  {
    path:'/categories', 
    name: 'Categories', 
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/randomizer',
    name: 'Randomizer',
    component: () => import('../views/Randomizer.vue')
  }, 
  //Redirect
  {
    path: '/', 
    redirect: '/home'
  }, 
  //404
  {
    path: '/:catchAll(.*)', 
    name: 'PageNotFound', 
    component: () => import('../views/PageNotFound.vue')
  }, 
  //Sitemap
  {
    path: '/sitemap', 
    name: 'Sitemap', 
    component: () => import('../views/Sitemap.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

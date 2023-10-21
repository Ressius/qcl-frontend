import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stream',
      name: 'stream',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StreamView.vue')
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/franchises',
      name: 'franchises',
      component: () => import('../views/FranchisesView.vue')
    }
  ]
})

export default router

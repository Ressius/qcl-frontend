import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/horaire',
      name: 'schedule',
      component: () => import('../views/ScheduleView.vue')
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
    },
    { 
      path: '/classement', 
      name: 'standings',
      component: () => import('../views/StandingsView.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router

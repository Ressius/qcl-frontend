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
      meta: { title: 'QCL - Accueil' },
      component: HomeView
    },
    {
      path: '/horaire',
      name: 'schedule',
      meta: { title: 'QCL - Horaire' },
      component: () => import('../views/ScheduleView.vue')
    },
    {
      path: '/equipe',
      name: 'equipe',
      meta: { title: 'QCL - Équipe' },
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/franchises',
      name: 'franchises',
      meta: { title: 'QCL - Franchises' },
      component: () => import('../views/FranchisesView.vue')
    },
    { 
      path: '/classement', 
      name: 'standings',
      meta: { title: 'QCL - Classement' },
      component: () => import('../views/StandingsView.vue')
    },
    { 
      path: '/stats', 
      name: 'stats',
      meta: { title: 'QCL - Stats' },
      component: () => import('../views/StatsView.vue')
    },
    { 
      meta: { title: 'QCL - 404' },
      path: '/:pathMatch(.*)*', 
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router

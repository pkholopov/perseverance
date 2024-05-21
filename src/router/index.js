import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Главная'
      }
    },
    {
      path: '/weather',
      name: 'weather',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeatherView.vue'),
      meta: {
        title: 'Погода'
      }
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('../views/ImagesView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ? to.meta?.title + ' | Perseverance' : 'Perseverance'
  if(to.path === '/') {
    document.body.classList.add('homeview')
  }
  else {
    document.body.classList.remove('homeview')
  }
  next()
})

export default router

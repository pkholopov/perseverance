import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '../layouts/HomeLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-layout',
      component: HomeLayout,
      meta: {
        title: 'Главная'
      },
      children: [
        {
          path: '',
          name: 'home-view',
          component: () => import('../views/HomeView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about-view',
      component:() => import ('../layouts/InfoLayout.vue'),
      children: [
        {
          path: '/weather',
          name: 'weather',
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

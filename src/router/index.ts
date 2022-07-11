import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import BlueScreen from '@/views/BlueScreen.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/blue-screen',
      component: BlueScreen,
    }
  ]
})

export default router
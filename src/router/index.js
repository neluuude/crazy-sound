import { createRouter, createWebHistory } from 'vue-router'

import ReleasePageWrap from '@/components/ReleasePageWrap.vue'
import MainPage from '@/components/MainPage.vue'

const routes = [
  //puti
  { path: '/', component: MainPage },
  { path: '/release/:idex', component: ReleasePageWrap },
]

export const router = createRouter({
  //tema (instantion(suschnost routera))
  history: createWebHistory(),
  routes,
})

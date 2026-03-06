import { createWebHistory , createRouter } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import AboutView from '@/components/AboutView.vue'
import Transactioncomp from '@/components/transactioncomp.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/Transactioncomp', component: Transactioncomp }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
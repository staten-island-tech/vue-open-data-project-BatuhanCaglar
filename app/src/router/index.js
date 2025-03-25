import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartComp from '../components/ChartComp.vue' 
import ChartPie from '@/components/ChartPie.vue'
import ChartMarshal from '@/components/ChartMarshal.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/chart', component: ChartComp },
  { path: '/pie', component: ChartPie },
  { path: '/marshal', component: ChartMarshal},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '@/views/ChartView.vue'
import MarshalView from '@/views/MarshalView.vue'
import PieView from '@/views/PieView.vue'
import RescomView from '@/views/RescomView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/chart', component: ChartView },
  { path: '/pie', component: PieView },
  { path: '/marshal', component: MarshalView},
  { path: '/rescom', component: RescomView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
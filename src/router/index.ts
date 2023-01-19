import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProductView from '../pages/index.page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'product-view',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

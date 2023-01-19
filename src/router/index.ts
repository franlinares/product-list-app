import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProductView from '../pages/index.page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'product-view',
    component: ProductView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

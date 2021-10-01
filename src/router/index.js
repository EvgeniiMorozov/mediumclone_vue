import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'
import GlobalFeed from '@/views/GlobalFeed'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router

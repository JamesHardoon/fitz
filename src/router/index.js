import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Add from '@/components/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 当router被激活时,给个默认的属性active
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          // 懒加载方式,这样更友好
          component: () => import (/* webpackChunkName: "list"*/ '@/components/List.vue')
          // component: List,
        },
        {
          path: 'user',
          name: 'user',
          // 懒加载方式,这样更友好
          component: () => import (/* webpackChunkName: "user"*/ '@/components/User.vue')
          // component: User,
        },
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
  ]
})

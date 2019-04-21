import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mark from '@/components/Mark'
import Borrow from '@/components/Borrow'
import Save from '@/components/Save'
import Vip from '@/components/Vip'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: "/home"
    },
    {
      path: '/markmoney',
      name: 'Mark',
      component: Mark
    },
    {
      path: '/borrowmoney',
      name: 'Borrow',
      component: Borrow
    },
    {
      path: '/savemoney',
      name: 'Save',
      component: Save
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path:"*",
      redirect:"/"
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'
// import { component } from 'vue/types/umd'


Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/profile',
      component: Profile,
      name: 'Profile'
    },
    {
      path: '/contact',
      component: Contact,
      name: 'Contact'
    },
    {
      path: '/',
      component: Home,
      name: 'Home'
    }
  ]
})
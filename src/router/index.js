import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'


Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      component: Profile,
      name: 'Profile'
    },
    {
      path: '/contact',
      component: Contact,
      name: 'Contact'
    }
  ]
})



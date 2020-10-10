import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Contact from '@/components/Contact'


Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   component: Home,
    //   name: 'Home'
    // },
    {
      path: '/contact',
      component: Contact,
      name: 'Contact'
    }
  ]
})



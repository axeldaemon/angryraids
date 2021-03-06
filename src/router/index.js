import Vue from 'vue'
import Router from 'vue-router'
import Simulator from '@/pages/Simulator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:heroName',
      name: 'Simulator',
      component: Simulator
    },
    {
      path: '*',
      redirect: '/Aselica'
    }
  ],
})

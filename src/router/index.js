import Vue from 'vue'
import Router from 'vue-router'
import Coordinates from '@/components/coordinates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coordinates',
      component: Coordinates
    }
  ]
})

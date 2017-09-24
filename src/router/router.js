import Vue from 'vue'
import Router from 'vue-router'
//引入路由文件
import Index from '@/components/index/Index.vue'
import Sort  from '@/components/sort/Sort.vue'
import Cart  from '@/components/cart/Cart.vue'
import Show  from '@/components/show/Show.vue'
import More  from '@/components/more/More.vue'
import Detail  from '@/components/index/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/detail/:goodid',
      name: 'Detail',
      component: Detail
    }
  ]
})

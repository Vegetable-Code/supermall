import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // meta: {
    //   title: '首页'
    // }
  },
  {
    path: '/category',
    component: Category,
    // meta: {
    //   title: '分类'
    // }
  },
  {
    path: '/cart',
    component: Cart,
    // meta: {
    //   title: '购物车'
    // }
  },
  {
    path: '/profile',
    component: Profile,
    // meta: {
    //   title: '档案'
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

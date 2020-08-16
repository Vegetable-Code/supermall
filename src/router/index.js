import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

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
    //   title: '我的'
    // }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    // meta: {
    //   title: '详情页'
    // }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// // 前置钩子
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title
//   next() // 必须先调用
// })

// // 后置钩子
// router.afterEach((to, from) => {
//   document.title = to.matched[0].meta.title
// })

export default router

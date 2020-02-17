import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'


Vue.use(VueRouter)

const routes = [
    //这种切换路由是：当切换到about时才会加载about路由，对于大项目来说更好一些
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

    movieRouter,
    mineRouter,
    cinemaRouter,
    //重定向：当路径找不到时默认到movie页面
    {
      path : '/*',
      redirect : '/movie'
    }
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  //根目录下设置路由
  base: 'miaomiao',
  routes
})

export default router

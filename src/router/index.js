import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import('../views/home/Login.vue').then(m => m.default);
const Home = () => import('../views/home/Home.vue').then(m => m.default);
const ApiList = () => import('../views/info/ApiList.vue').then(m => m.default);
const AddApiInfo = () => import('../views/info/AddApiInfo.vue').then(m => m.default);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/home/apiList',
          name: 'apiList',
          component: ApiList
        },
        {
          path: '/home/addApiInfo',
          name: 'addApiInfo',
          component: AddApiInfo
        }
      ]
    },
  ]
})

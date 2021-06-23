import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
//import VueLunBotu from '@/components/VueLunBotu'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/ces',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //测试develop分支
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/lun',
    //   name: 'VueLunBotu',
    //   component: VueLunBotu
    // }
  ]
  //测试git是否使用
})

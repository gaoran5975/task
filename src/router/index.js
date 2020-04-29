import Vue from 'vue'
import Router from 'vue-router'
import mainpageRouter from './mainpage'
import houtaiRouter from './houtai'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      mainpageRouter,
      houtaiRouter,  	
    // {	 
    //   path: '/*',
    //   redirect: '/mainpage'
    // }
  ]
})

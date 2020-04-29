import Vue from 'vue'
import Router from 'vue-router'
import mainpageRouter from './mainpage'
import houtaiRouter from './houtai'
import jbxxtxRouter from './jbxxtx'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      mainpageRouter,
      houtaiRouter,
      jbxxtxRouter  	
    // {	 
    //   path: '/*',
    //   redirect: '/mainpage'
    // }
  ]
})

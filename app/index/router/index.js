import Vue from 'vue'
import Router from 'vue-router'
import Userlist from '../components/Userlist'
import Useradd from '../components/Useradd'
import Home from '../components/Home'
import Signin from '../components/Signin'
import Useraddback from '../components/Useraddback'
Vue.use(Router)


export function createRouter () {
  return new Router({
    routes: [
    	{
    	  path: '/', component: Signin
    	},
        { path: '/home', component:Home, 
      		children:[
      			{ path: 'user/list', component:Userlist },
      			{ path: 'user/add', component:Useradd },
      			{ path: 'user/modify', component:Useradd },
      			{ path: 'user/add/back', component:Useraddback }
      		]
        }
    ]
  })
}
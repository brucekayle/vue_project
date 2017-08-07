import Vue from 'vue'
import Router from 'vue-router'
import Userlist from '../components/user/Userlist'
import Useradd from '../components/user/Useradd'
import Usermodify from '../components/user/Usermodify'
import Usermodifyform from '../components/user/Usermodifyform'
import Home from '../components/Home'
import Signin from '../components/Signin'
import Blank from '../components/Blank'
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
      			{ path: 'user/modify', component:Usermodify,
      				children:[
      					{ path: ':account', component:Usermodifyform }
      				]
      			},
      			
      		]
        }
    ]
  })
}
import Vue from 'vue'
import Pageheader from './components/Pageheader'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createRouter } from './router'
import { createStore } from './store'
import './index.css'
import './utils/animate/animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'

Vue.use(ElementUI)

const router = createRouter()

router.beforeEach((to, from, next) => {
  	next()
})


const store = createStore()
var app = new Vue({
	router,
	store,
	methods: {
		add: function(){

			alert(123)
		}
	}
}).$mount('#app')


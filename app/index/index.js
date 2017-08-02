import Vue from 'vue'
import Favlist from './components/Favlist'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/js/bootstrap.min.js'
console.log($("#app"))
var app = new Vue({
	el: '#app',
	components: { Favlist,Sidebar }
})
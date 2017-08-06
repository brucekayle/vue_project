<template>
	<div id="html" :class="leftSidebarStatus">
	<pageheader></pageheader>
		<div class="page-body"> 
			<sidebar  v-on:refreshbizlines="updateBreadcrumbs"></sidebar>
			<div class="content">
		        <div class="content-header">
		            <div class="leftside-content-header">
		                <ul class="breadcrumbs">
		                    <li><i :class="breadcrumb_ico" aria-hidden="true"></i><router-link to="/home">{{breadcrumb_one}}</router-link></li>
		                    <li><a>{{breadcrumb_two}}</a></li>
		                </ul>
		            </div>
		        </div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue' 
	import Pageheader from './Pageheader'
	import Sidebar from './Sidebar'
	Vue.component('pageheader', Pageheader)
	Vue.component('sidebar', Sidebar)

	export default {
		data()	{
			return {
			}
		},
		mounted() {
			//每次刷新回到主页面
			//this.$router.push('/home')
		},
		computed: {
			leftSidebarStatus　() {
				return this.$store.state.leftSidebarStatus
			},
			breadcrumb_ico () {
		    	return this.$store.state.breadcrumb_ico
		    },
		    breadcrumb_one () {
		    	return this.$store.state.breadcrumb_one
		    },
		    breadcrumb_two () {
		    	return this.$store.state.breadcrumb_two
		    }
		},
		methods: {
			updateBreadcrumbs (a){
			}
		}
	}
</script>
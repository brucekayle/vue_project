<template>
	<div class="row animated fadeInRight">
        <div class="col-sm-12">
            <h4 class="section-subtitle"><b>修改用户</b></h4>
            <div class="panel">
                <div class="panel-content">
                    <div class="row">
                        <div class="col-md-12">
                        	用户账号：<input v-model="account"><router-link :to="'/home/user/modify/'+account" class="btn btn-primary" :class="disabled">查询</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
		data () {
			return {
				account: 'a',
                disabled: ''
			}
		},
        watch: {
            account: function(value) {
                if(value==''){
                }
                this.$router.push('/home/user/modify/')
            }
        },
		mounted: function() {
	        var path = this.$route.path.split("/")
	        this.account = path[4] 
	    }
	}
</script>

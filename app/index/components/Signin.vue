<template>
	<div class="accounts sign-in">
	    <div class="page-body animated slideInDown">
        <div class="logo">

        	<h2 class="text-center">卓智达企业管理平台</h2>
        </div>
        <div class="box" v-loading="loading" element-loading-text="登录中...">
            <div class="panel mb-none">
                <div class="panel-content bg-scale-0">
                    <form>
                        <div class="form-group mt-md">
                            <span class="input-with-icon">
                                <input type="text" class="form-control" id="account" placeholder="账号">
                                <i class="fa fa-user-o"></i>
                            </span>
                        </div>
                        <div class="form-group">
                            <span class="input-with-icon">
                                <input type="password" class="form-control" id="password" placeholder="密码">
                                <i class="fa fa-key"></i>
                            </span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control vericode" id="vericode" placeholder="验证码" style="width: 60%;display: inline;">
                            <img src="../image/org_login.png" class="veripic" height="34px" width="100px">
                        </div>
                        <div class="form-group" style="margin-top:50px">
                            <a class="btn btn-primary btn-block" @click="signin">登录</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				loading: false
			}
		},
		methods: {
			signin: function(){
				var vm = this
				this.loading = true

				setTimeout(function(){
					vm.$router.push('/home')
				},1000)


			}
		}
	}


</script>

<style>
	body {
		background-image: url('../image/org_login.png')!important;
	}
	.veripic {
		float: right;
	}
</style>

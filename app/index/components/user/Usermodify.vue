<template>
	<div class="row animated fadeInRight">
        <div class="col-sm-12">
            <h4 class="section-subtitle"><b>修改用户</b></h4>
            <div class="panel">
                <div class="panel-content">
                    <div class="row">
                        <div class="col-md-12">
                        	用户账号：<input v-model="account"><router-link :to="'/home/user/modify/'+account" class="btn btn-primary btn-loading" :class="disabled" @click.native="btnStartSpinning">查询</router-link>
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
				account: '',
                disabled: ''
			}
		},
        watch: {
            account: function(value) {
                if(this.account==''){
                    this.disabled = 'disabled'
                }else{
                    this.disabled = ''
                    this.$router.push('/home/user/modify/')
                }
            }
        },
		mounted: function() {
            if(this.account==''){
                this.disabled = 'disabled'
            }
	        var path = this.$route.path.split("/")
	    },
        methods: {
            btnStartSpinning(e){
                this.disabled = 'disabled'
                $(".btn-loading").addClass("btn-spinning").append('<i class="fa fa-spinner fa-spin btn-spin" aria-hidden="true"></i>')
            },
            btnStopSpinning(e){
                this.disabled = ''
                $(".btn-loading").removeClass("btn-spinning").find("i.btn-spin").remove()
            }
        }
	}
</script>

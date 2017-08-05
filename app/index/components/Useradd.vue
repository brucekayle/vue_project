<template>
	<div class="row animated fadeInUp">
        <div class="col-sm-12">
            <h4 class="section-subtitle"><b>增加用户</b></h4>
            <div class="panel" v-loading="loading" element-loading-text="正在增加用户...">
                <div class="panel-content">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                            	<div class="form-group">
                                    <label for="bill" class="col-sm-3 control-label">使用账单</label>
                                    <div class="col-sm-6">
                                    <select name="bill" id="bill" class="form-control" style="width: 100%">
                                        <option v-for="bill in billList" :value="bill.id">
                                        	{{bill.end_time}}（使用情况：{{bill.used_num}}/{{bill.number}}）
                                        </option>
                                    </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="account" class="col-sm-3 control-label">用户账号</label>
                                    <div class="col-sm-6">
                                    <input type="text" class="form-control" name="account" id="account" maxlength="15" v-model="formData.account">
                                    <span class="help-block"><i class="fa fa-info-circle mr-xs"></i>必须是英文字母或数字,且长度不能大于<span class="code">15</span></span>
                                    </div>
                                </div>
                            	<div class="form-group">
                                    <label for="password" class="col-sm-3 control-label">用户密码</label>
                                    <div class="col-sm-6">
                                    <input type="password" class="form-control" name="password" id="password" v-model="formData.password">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="confirmPassword" class="col-sm-3 control-label">确认密码</label>
                                    <div class="col-sm-6">
                                    <input type="password" class="form-control" name="confirmPassword" id="confirmPassword" v-model="formData.confirmPassword">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-3 control-label">用户名字</label>
                                    <div class="col-sm-6">
                                    <input type="text" class="form-control" name="name" id="name" maxlength="15" v-model="formData.name">
                                    <span class="help-block"><i class="fa fa-info-circle mr-xs"></i>必须是数字、英文字母或中文，且长度不能大于<span class="code">15</span>.如果是中文，长度不能大于<span class="code">10</span></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="groups" class="col-sm-3 control-label">所属群组</label>
                                    <div class="col-sm-6">
                                    <select2 id="groups" :options="groupList" v-model="formData.selected" multiple style="width: 100%">
								    </select2>
                                    </div>
                                </div>
								<div class="form-group">
                                    <label for="defaultGroup" class="col-sm-3 control-label">默认群组</label>
                                    <div class="col-sm-6">
                                    <select name="defaultGroup" id="defaultGroup" class="form-control" style="width: 100%">
                                        <option value="no" >不在群组</option>
                                        <option v-for="group in formData.selectGroupList" :value="group.id">{{group.name}}</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="desc" class="col-sm-3 control-label">用户描述</label>
                                    <div class="col-sm-6">
                                    <textarea class="form-control" rows="3" name="desc" id="desc"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-3 col-sm-9">
                                    	<button type="submit" class="btn btn-primary">确认提交</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import Vue from "vue"
	import '../utils/bootstrap/bootstrap-maxlength'
	import '../utils/select2/js/select2.min'
	import '../utils/select2/css/select2.min.css'
	import '../utils/select2/css/select2-bootstrap.min.css'
	import '../utils/jquery-validation/jquery.validate.min'
	import '../utils/jquery-form/jquery.form.min'
	import axios from 'axios'
	import select2 from "./select2"

	Vue.component('select2',select2)

    export default {
    	data() {
    		return {
    			billList: [],
    			groupList: [{id:1,text:'a'},{id:2,text:'b'},{id:3,text:'adads'},{id:4,text:'bfasfsa'}],
    			loading: false,
    			formData: {
    				account: '',
    				password: '',
    				confirmPassword: '',
    				name: '',
    				selectGroupList: [],
    				selected: []
    			},
    			defaultData: {},
    		}
    	},
	    created() {
	        this.defaultData = JSON.parse(JSON.stringify(this.formData))
	    },
	    computed: {
	    	//利用computed做中间层，以监听对象的具体属性
			selected() {
		　　　　return this.formData.selected
		　　},
			account() {
				return this.formData.account
			}
		},
		watch: {
			selected: function (value) {
				//同步默认群组的选项为所属群组的选择##bug:在选择所属群组后点击默认群组再选择所属群组排序在前的选项会导致默认群组选项显示重复
				this.formData.selectGroupList = []
				for(var n in value){
					for(var m in this.groupList){
						if(value[n]==this.groupList[m].id){
		    				var group = {"id":value[n],"name":this.groupList[m].text}
		    				this.formData.selectGroupList.push(group)
		    				
		    			}
					}
				}
			},
			account: function(value){
				//检测帐号存在
			}
		},
		mounted: function() {
			var vm = this

			$('#bill').select2()

			$('#account').maxlength({
			    alwaysShow: true,
			    placement: 'top-right-inside'
			});

			$("#defaultGroup").select2();
		    
		    $("#defaultGroup").on('change', function(){
		    })


			vm.updateSelectData()

	        $("form").validate({

		        highlight: function(label) {
		            $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
		            $(label).closest('.form-group').find('.help-block').css("display","none")
		        },
		        success: function(label) {
		            $(label).closest('.form-group').removeClass('has-error');
		            $(label).closest('.form-group').find('.help-block').css("display","")
		            label.remove();
		        },
		        rules: {
		            account: {
		            	required: true,
		            	minlength: 3
		            },
		            password: {
		                required: true,
		            },
		            confirmPassword: {
		                required: true,
		                equalTo: "#password"
		            },
					name: {
		                required: true
		            },
		        },
		        messages: {
		        	account: {
				        required: "请输入账号",
				        minlength: "输入长度要大于3"
				    },
				    password: {
				    	required: "请输入密码"
				    },
				    confirmPassword: {
				    	required: "请确认密码",
				    	equalTo: "两次输入密码不一致"
				    },
				    name: {
				    	required: "请输入名字"
				    },
		        },
		        submitHandler:function(form){
		        	vm.loading = true
					$("form").ajaxSubmit({
		                url: 'http://localhost/ptt/webserver?event=org_adduser',//返回值要有最新的账单信息
		               	success: function (data) {
		               		vm.loading = false
		               		vm.$message('用户增加成功！')
		               		//vm.$router.push('/home/user/add/back')
		                	//重置表单
		                	Object.assign(vm.formData, vm.defaultData);
		                },
		                error: function (XMLHttpRequest, textStatus, errorThrown) {
		                	vm.loading = false
		                	vm.$message('用户增加失败！')
		                	Object.assign(vm.formData, vm.defaultData)
		                }
		            });
		            return false
				}
		    });

		},
		methods: {

			updateSelectData() {
				var vm = this

				axios.get('http://localhost/ptt/webserver?event=org_adduser&method=getBillList')
		          .then(function (response) {
		          	if(response.data.status==0){
		          		vm.billList = response.data.data
		          	}
		          })
		          .catch(function (error) {
		            vm.$notify.error({
			          title: '错误',
			          message: '账单获取失败'
			        });
		          })
		    	axios.get('http://localhost/ptt/webserver?event=org_adduser&method=getGroupList')
		          .then(function (response) {
		          	if(response.data.status==0){
		          		vm.groupList = response.data.data
		          	}
		          })
		          .catch(function (error) {
		            vm.$notify.error({
			          title: '错误',
			          message: '账单群组失败'
			        });
		          })
			}
	 	}
	}
</script>

<style>
	input {
		background: transparent;
	    border:none;
	    outline: none;
	}

</style>
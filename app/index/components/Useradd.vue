<template>
	<div class="row animated fadeInUp" v-loading="loading" element-loading-text="正在增加用户...">
        <div class="col-sm-12">
            <h4 class="section-subtitle"><b>增加用户</b></h4>
            <div class="panel">
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
                                    <input type="text" class="form-control" name="account" id="account" maxlength="15">
                                    <span class="help-block"><i class="fa fa-info-circle mr-xs"></i>必须是英文字母或数字,且长度不能大于<span class="code">15</span></span>
                                    </div>
                                </div>
                            	<div class="form-group">
                                    <label for="password" class="col-sm-3 control-label">用户密码</label>
                                    <div class="col-sm-6">
                                    <input type="password" class="form-control" name="password" id="password">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="confirmPassword" class="col-sm-3 control-label">确认密码</label>
                                    <div class="col-sm-6">
                                    <input type="password" class="form-control" name="confirmPassword" id="confirmPassword">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-3 control-label">用户名字</label>
                                    <div class="col-sm-6">
                                    <input type="text" class="form-control" name="name" id="name" maxlength="15">
                                    <span class="help-block"><i class="fa fa-info-circle mr-xs"></i>必须是数字、英文字母或中文，且长度不能大于<span class="code">15</span>.如果是中文，长度不能大于<span class="code">10</span></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="groups" class="col-sm-3 control-label">所属群组</label>
                                    <div class="col-sm-6">
                                    <select name="groups" id="groups" class="form-control" multiple="multiple" style="width: 100%">
                                        <option v-for="group in groupList" :value="group.id">{{group.name}}</option>
                                    </select>
                                    </div>
                                </div>
								<div class="form-group">
                                    <label for="defaultGroup" class="col-sm-3 control-label">默认群组</label>
                                    <div class="col-sm-6">
                                    <select name="defaultGroup" id="defaultGroup" class="form-control" style="width: 100%">
                                        <option value="no">不在群组</option>
                                        <option v-for="group in selectGroupList" :value="group.id">{{group.name}}</option>
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
	import '../utils/bootstrap/bootstrap-maxlength'
	import '../utils/select2/js/select2.min'
	import '../utils/select2/css/select2.min.css'
	import '../utils/select2/css/select2-bootstrap.min.css'
	import '../utils/jquery-validation/jquery.validate.min'
	import '../utils/jquery-form/jquery.form.min'
	import axios from 'axios'

    export default {
    	data() {
    		return {
    			billList: [],
    			groupList: [],
    			selectGroupList: [],
    			loading: false
    		}
    	},
		mounted: function() {
			var vm = this

			$('#bill').select2()

			$('#account').maxlength({
			    alwaysShow: true,
			    placement: 'top-right-inside'
			});

			$("#groups").select2({
		        allowClear: true
		    });

		    $("#groups").on("change", function(e) {
		    	var selectGroupList = []
		    	var selectGroupIds = $(this).val()
		    	for(var n in selectGroupIds){
		    		for(var m in vm.groupList){
		    			if(selectGroupIds[n]==vm.groupList[m].id){
		    				var group = {"id":selectGroupIds[n],"name":vm.groupList[m].name}
		    				selectGroupList.push(group)
		    			}
		    		}
		    	}
		    	vm.selectGroupList = selectGroupList
		    })

			$("#defaultGroup").select2();
		    
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
		                url: 'http://localhost/ptt/webserver?event=org_adduser',
		               	success: function (data) {
		               		vm.loading = false
		               		vm.$message('用户增加成功！')
		               		vm.$router.push('/home/user/add/back')
		                },
		                error: function (XMLHttpRequest, textStatus, errorThrown) {
		                	vm.loading = false
		                	vm.$message('用户增加失败！')
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
<template>
	<div class="panel">
        <div class="panel-content">
            <div class="row">
                <div class="col-md-12">
                	<form class="form-horizontal">
                	    <div class="form-group">
                            <label for="name" class="col-sm-3 control-label">修改用户名字</label>
                            <div class="col-sm-6">
                           		<input type="text" class="form-control" name="name" id="name" maxlength="15" v-model="formData.name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="priority" class="col-sm-3 control-label">修改讲话级别</label>
                            <div class="col-sm-6">
                            	<select2 name="priority" id="priority" class="form-control" :options="priorityList" v-model="formData.priority" style="width: 100%">
								</select2>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
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
    				selected: [],
    				priority: 0,
    				mobile: '',
    				function: [],
    				sim: ''
    			},
    			defaultData: {},
    			priorityList: [{id:0,text:'低级'},{id:1,text:'中级'},{id:2,text:'高级'},{id:3,text:'特级'}]
    		}
    	},
		mounted: function() {
	        var path = this.$route.path.split("/")
			console.log(path)
	        this.account = path[4] 
	    }
    }

</script>
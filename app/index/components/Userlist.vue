<template>
    <div class="row animated fadeInRight">
        <div class="col-sm-12">
            <h4 class="section-subtitle"><b>查询用户</b></h4>
            <div class="panel">
                <div class="panel-content">
                    <table id="responsive-table" class="data-table table table-striped table-hover responsive nowrap" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th>账号</th>
                            <th>名字</th>
                            <th>默认群组</th>
                            <th>状态</th>
                            <th>在线</th>
                            <th>级别</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import '../utils/data-table/media/js/jquery.dataTables.min.js'
	import '../utils/data-table/media/js/dataTables.bootstrap.min.js'
	import '../utils/data-table/extensions/Responsive/js/dataTables.responsive.min.js'
	import '../utils/data-table/media/css/dataTables.bootstrap.min.css'

	export default {
		

		mounted: function() {
			$('.data-table').DataTable({
				ajax:  "http://localhost/ptt/webserver?event=org_listuser",
		        stateSave: true,
		        columnDefs:[{
					 orderable:false,//禁用排序
					 targets:[4]   //指定的列
				 }],

				createdRow: function( row, data, dataIndex ) {
					var status = $($(row).children().get(3));
					var priority = $($(row).children().get(4));
					var privilege = $($(row).children().get(5));
					if(data[3]==0){
						status.text("暂停")
					}else{
						status.text("正常")
					}

					if(data[4]<=0){
						priority.text("低")
					}else if(data[4]==1){
						priority.text("中")
					}else if(data[4]==2){
						priority.text("高")
					}else{
						priority.text("特")
					}

					var str = ""
				    if(data[5] & 1){
				         str += "[好友]"
				    }
				    if(data[5] & 2){
				         str += "[单呼]"
				    }
				    if(data[5] & 4){
				         str += "[换组]";
				    }
				    if((data[5] & 6144) == 6144){
				         str += "[查位]";
				    }
				    if(data[5] & 16){
				         str += "[记录]";
				    }
				    if(data[5] & 2048){
				         str += "[定位]";
				    }
				    if(data[5] & 64){
				         str += "[监听]";
				    }
				    if(data[5] & 1024){
				         str += "[录音]";
				    }
				    if(data[5] & 512){
				         str += "[遥闭]";
				    }
				    if(data[5] & 128){
				    	 str += "[显组]";
				    }
				    if(data[5] & 16384){
				   	 	 str += "[最后组]";
				    }
				    
				    if(str.length == 0){
				         str = ".";	 
				    }
				    privilege.text(str)
}
			});
		}
	}
</script>
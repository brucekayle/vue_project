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
	import '../../utils/data-table/media/js/jquery.dataTables.min.js'
	import '../../utils/data-table/media/js/dataTables.bootstrap.min.js'
	import '../../utils/data-table/extensions/Responsive/js/dataTables.responsive.min'
	import '../../utils/data-table/media/css/dataTables.bootstrap.min.css'
	import '../../utils/data-table/extensions/Responsive/css/responsive.bootstrap.min.css'

	export default {
		

		mounted: function() {
			$('.data-table').DataTable({
				"ajax": {
				    "url": this.$store.state.serverUrl+'webserver?event=org_listuser',
				    "dataSrc": function ( json ) {
				      for ( var i=0, ien=json.data.length ; i<ien ; i++ ) {

				      	json.data[i][0] = "<a href='#/home/user/modify/"+json.data[i][0]+"'>"+json.data[i][0]+"</a>"


				        if(json.data[i][3]==0){
							json.data[i][3] = "暂停"
						}else{
							json.data[i][3] = "正常"
						}

						if(json.data[i][4]<=0){
							json.data[i][4] = "低"
						}else if(json.data[i][4]==1){
							json.data[i][4] = "中"
						}else if(json.data[i][4]==2){
							json.data[i][4] = "高"
						}else{
							json.data[i][4] = "特"
						}


						var str = ""
					    if(json.data[i][5] & 1){
					         str += "<label class='label label-info'>好友</label>&nbsp;"
					    }
					    if(json.data[i][5] & 2){
					         str += "<label class='label label-info'>单呼</label>&nbsp;"
					    }
					    if(json.data[i][5] & 4){
					         str += "<label class='label label-info'>换组</label>&nbsp;";
					    }
					    if((json.data[i][5] & 6144) == 6144){
					         str += "<label class='label label-info'>查位</label>&nbsp;";
					    }
					    if(json.data[i][5] & 16){
					         str += "<label class='label label-info'>记录</label>&nbsp;";
					    }
					    if(json.data[i][5] & 2048){ 
					         str += "<label class='label label-info'>定位</label>&nbsp;";
					    }
					    if(json.data[i][5] & 64){
					         str += "<label class='label label-info'>监听</label>&nbsp;";
					    }
					    if(json.data[i][5] & 1024){
					         str += "<label class='label label-info'>录音</label>&nbsp;";
					    }
					    if(json.data[i][5] & 512){
					         str += "<label class='label label-info'>遥闭</label>&nbsp;";
					    }
					    if(json.data[i][5] & 128){
					    	 str += "<label class='label label-info'>显组</label>&nbsp;";
					    }
					    if(json.data[i][5] & 16384){
					   	 	 str += "<label class='label label-info'>最后组</label>";
					    }
					    
					    if(str.length == 0){
					         str = ".";	 
					    }
					    json.data[i][5] = str

				      }
				      return json.data;
				    }
				},
		        stateSave: true,
		        columnDefs:[{
					 orderable:false,//禁用排序
					 targets:[5]   //指定的列
				 }],
				 language: {  
			      "sProcessing": "处理中...",  
			      "sLengthMenu": "显示 _MENU_ 项结果",  
			      "sZeroRecords": "没有匹配结果",  
			      "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",  
			      "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",  
			      "sInfoFiltered": "(由 _MAX_ 项结果过滤)",  
			      "sInfoPostFix": "",  
			      "sSearch": "搜索:",  
			      "sUrl": "",  
			      "sEmptyTable": "表中数据为空",  
			      "sLoadingRecords": "载入中...",  
			      "sInfoThousands": ",",  
			      "oPaginate": {  
			          "sFirst": "首页",  
			          "sPrevious": "上页",  
			          "sNext": "下页",  
			          "sLast": "末页"  
			      },
			      "oAria": {  
          "sSortAscending": ": 以升序排列此列",  
          "sSortDescending": ": 以降序排列此列"  
      }  
  },  
				createdRow: function( row, data, dataIndex ) {
					var status = $($(row).children().get(3));
					var priority = $($(row).children().get(4));
					var privilege = $($(row).children().get(5));

					
				}
			});
		}
	}
</script>
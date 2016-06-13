$(document).ready(function() {
	$.messager.model = {
		ok:{ 
			text: "确定", 
			classed: "btn-danger" 
		},
		cancel: { 
			text: "取消", 
			classed: "btn-default" 
		}
	};
	
	checkAdminSession(function() {
		$("#list-loading").show();
		$("#reserve-list").hide();
		ReserveManager.getAll(function(reserves) {
			$("#reserve-list").show();
			$("#list-loading").hide();
			for(var i in reserves) {
				$("#reserve-list tbody").mengular(".reserve-list-template", {
					rid: reserves[i].rid,
					createDate: reserves[i].createDate.format(DATE_HOUR_MINUTE_SECOND_FORMAT),
					name: reserves[i].name,
					telephone: reserves[i].telephone,
					address: reserves[i].address,
					service: reserves[i].service,
					area: reserves[i].area,
					user: reserves[i].user,
					number: reserves[i].number
				});

				$("#"+reserves[i].rid+" .reserve-list-remove").click(function() {
					var rid=$(this).parent().attr("id");
					var name=$("#"+rid+" .reserve-list-name").text();
					$.messager.confirm("提示", "确认删除用户"+name+"的服务预约？", function() {
						ReserveManager.remove(rid, function() {
							$("#"+rid).remove();
						});
					});
				});
			}
		});
	});
});
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
		$("#feedback-list").hide();
		FeedbackManager.getAll(function(feedbacks) {
			$("#feedback-list").show();
			$("#list-loading").hide();
			for(var i in feedbacks) {
				$("#feedback-list tbody").mengular(".feedback-list-template", {
					fid: feedbacks[i].fid,
					createDate: feedbacks[i].createDate.format(DATE_HOUR_MINUTE_SECOND_FORMAT),
					name: feedbacks[i].name,
					telephone: feedbacks[i].telephone,
					address: feedbacks[i].address,
					device: feedbacks[i].device,
					message: feedbacks[i].message
				});

				$("#"+feedbacks[i].fid+" .feedback-list-message").click(function() {
					var fid=$(this).parent().attr("id");
					var name=$("#"+fid+" .feedback-list-name").text();
					$.messager.alert(name+"的留言内容", "<pre>"+$(this).attr("title")+"</pre>");
				});

				$("#"+feedbacks[i].fid+" .feedback-list-remove").click(function() {
					var fid=$(this).parent().attr("id");
					var name=$("#"+fid+" .feedback-list-name").text();
					$.messager.confirm("提示", "确认删除用户"+name+"的反馈投诉？", function() {
						FeedbackManager.remove(fid, function() {
							$("#"+fid).remove();
						});
					});
				});
			}
		});
	});
});
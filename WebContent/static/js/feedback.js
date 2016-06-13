$(document).ready(function() {
	$("#feedback-submit").click(function() {
		var name=$("#feedback-name").val();
		var telephone=$("#feedback-telephone").val();
		var address=$("#feedback-address").val();
		var device=$("#feedback-device").val();
		var message=$("#feedback-message").val();
		if(name==""||telephone==""||address==""||device=="") {
			alert("请填写所有带星号的必填项目！");
			return;
		}
		FeedbackManager.add(name, telephone, address, device, message, function(fid) {
			if(fid) {
				alert("提交成功");
				location.href="index.html";
			}
		});
	});
});
$(document).ready(function() {
	$("#reserve-submit").click(function() {
		var name=$("#reserve-name").val();
		var telephone=$("#reserve-telephone").val();
		var address=$("#reserve-address").val();
		var service=$("input[name='reserve-service']:checked").val();
		var area=$("#reserve-area").val();
		var user=$("input[name='reserve-user']:checked").val();
		var number=$("#reserve-number").val();
		if(name==""||telephone==""||address==""||service==""||user=="") {
			alert("请填写所有带星号的必填项目！");
			return;
		}
		ReserveManager.add(name, telephone, address, service, area, user, number, function(rid) {
			if(rid) {
				alert("提交成功");
				location.href="index.html";
			}
		});
	});
});
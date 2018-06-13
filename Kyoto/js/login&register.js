$(document).ready(function () {
	$('form>input').focus(function () {
		$(this).css({'background-color':'#fff','box-shadow':'1px 1px 5px #888'});
	})
	$('form>input').blur(function () {
		$(this).css({'background-color':'#F5F5F5','box-shadow':''});
	})
	var a=$('#checkbox').css('background-image');
	$('#checkbox,#cb').click(function () {
		if ($('#checkbox').css('background-image')==a) {
			$('#checkbox').css({'background-image':'url(../img/login/checked-checkbox.png)'});
		}else{
			$('#checkbox').css({'background-image':'url(../img/login/unchecked-checkbox.png)'});
		}
	})
	$('#password1').keydown(function () {
		var str=$(this).val();
		if (str.length<7) {
			$('.ware>span').text('密码太短');
			$('.ware>div').css({'background':'#ddd'});
		}else {
			var flag=true;
			for (var i=0; i<str.length; i++) {
				if (str[i]>"A" && str[i]<"Z" || str[i]>"a" && str[i]<"z") {
					flag=false;
				}
			}
			if (flag) {
				$('.ware>span').text('密码强度弱');
				$('.ware>div').css({'background':'#ddd'});
				$('.ware>div').eq(0).css({'background':'#4ec130'});
				$('.ware>div').eq(1).css({'background':'#4ec130'});
			}else{
				$('.ware>span').text('密码强度强');
				$('.ware>div').css({'background':'#4ec130'});
				$('.ware>div').eq(4).css({'background':'#ddd'});
			}
		}	
	})
})
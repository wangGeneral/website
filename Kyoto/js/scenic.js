$(document).ready(function () {
	$('.body>.bd-box>.bd-box-bt>div>a').mouseenter(function () {
		$('.body>.bd-box>.bd-box-bt>a').eq($('.body>.bd-box>.bd-box-bt>div>a').index($(this))).css({'transform':'translateY(-5px)'})
	})
	$('.body>.bd-box>.bd-box-bt>div>a').mouseout(function () {
		$('.body>.bd-box>.bd-box-bt>a').eq($('.body>.bd-box>.bd-box-bt>div>a').index($(this))).css({'transform':''})
	})
	$('.bd-box-bt>a').click(function () {
		var str=$(this).children().attr('src');
		window.location="../html/scenic/child.html?str="+str;
	})
})
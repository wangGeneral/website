$(document).ready(function () {
	$('.show').click(function () {
		$('<div/>').css({'background':'url(../img/sightseeing/spinner.gif) no-repeat','position':'relative','left':'290px','top':'35px'}).addClass('load').appendTo($('.bd-lf'));
		$(this).css({'display':'none'});
		setTimeout(function () {
			$('.load').css({'display':'none'});
			$('.dis').css({'display':'block'});
			$('.body').css({'height':'1261px'});
		},1000)
	})
})
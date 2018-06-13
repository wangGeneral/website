$(document).ready(function () {
	$('.bd-ct>a,.bd-bt>a').click(function () {
		var str=$(this).children().attr('src');
		$('<div/>').css({
			'position':'fixed',
			'width':'100%',
			'height':'960px',
			'background':'black',
			'opacity':'.5',
			'z-index':'999',
			'top':'0',
			'left':'0'
		}).addClass('black').appendTo($('body'));
		
		$("<img src="+str+">").css({
			'position':'fixed',
			'z-index':'999',
			'top':'300px',
			'left':'750px'
		}).appendTo($('body'));
		
		$('<button/>').css({
			'width':'50px',
			'height':'50px',
			'position':'fixed',
			'z-index':'999',
			'top':'10px',
			'right':'10px',
			'background':'url(../img/u=2309112351,3741055709&fm=72.jpg)',
			'background-size':'50px 50px',
			'border-radius':'50%',
			'outline':'0',
			'border':'0',
			'cursor':'pointer'
		}).click(function () {
			$('body>.black').css({'display':'none'});
			$('body>img').css({'display':'none'});
			$(this).css({'display':'none'});
		}).appendTo($('body'));
	})
})

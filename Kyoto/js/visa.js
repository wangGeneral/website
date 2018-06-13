$(document).ready(function () {
	$('li').click(function () {
		$('.bd-lf-bt>div>div').eq($(this).index()).show().siblings().hide();
		$(this).children().css({'color':'black','border-color':'black'});
		$(this).siblings().children().css({'color':'darkgray','border-color':'#fff'});
	})
	var count=$('.minus+input').val();
	$('.minus').click(function () {
		if (count>1) {
			$(this).next().val(--count);
		}
	})
	$('.plus').click(function () {
		$(this).prev().val(++count);
	})
})
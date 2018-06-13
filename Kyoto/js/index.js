$(document).ready(function () {
	var index=2;
	setInterval(function () {
		index--;
		if (index==-1) {
			index=2;
		}
		$(".head>.head-bottom>ul>li").eq(index).fadeIn().siblings().fadeOut();
	},10000)
	$('.bd-ct-right>div>a').click(function () {
		var str=$(this).children().children().attr('src');
		window.location="indexChild.html?str="+str;
	})
	$('.bd-bt>a').click(function () {
		var str=$(this).children().children().attr('src');
		window.location="indexChild.html?str="+str;
	})
})
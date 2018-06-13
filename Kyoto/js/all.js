$(document).ready(function() {
	var top = $('.nav').offset().top+$('.nav').height();
	$(document).scroll(function() {
		var scrTop = $(window).scrollTop();
		if(scrTop >= top) {
			$('#nav').css({'display':'block'});
		} else { 
			$('#nav').css({'display':'none'});
		}
	})
})
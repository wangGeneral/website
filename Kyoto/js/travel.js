$(document).ready(function () {
	$('.change').focus(function () {
		var label=document.querySelectorAll('label');
		for (var i=0; i<label.length; i++) {
			if ($(label[i]).attr('for')==$(this).attr('id')) {
				$(label[i]).css({'opacity':'.5'});
			}
		}
	})
	$('.change').blur(function () {
		if ($(this).val()=="") {
			var label=document.querySelectorAll('label');
			for (var i=0; i<label.length; i++) {
				if ($(label[i]).attr('for')==$(this).attr('id')) {
					$(label[i]).css({'display':'','opacity':'1'});
				}
			}
		}
	})
	$('.change').keydown(function () {
		var label=document.querySelectorAll('label');
		for (var i=0; i<label.length; i++) {
			if ($(label[i]).attr('for')==$(this).attr('id')) {
				$(label[i]).css({'display':'none'});
			}
		}
	})
})
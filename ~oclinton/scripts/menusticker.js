var fixed = false;
var topTrigger = $('#sticker').offset().top;
$(document).scroll(function() {
	if( $(this).scrollTop() >= topTrigger ) {
		if( !fixed ) {
			fixed = true;
			$('#sticker').css({'position':'fixed', 'top':'0'});
		}
	} else {
		if( fixed ) {
			fixed = false;
			$('#sticker').css({'position':'relative'});
		}
	}
});
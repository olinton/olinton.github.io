
    var startProductBarPos=72;
    window.onscroll=function(){
        var bar = document.getElementById('sticker');
        var bar2 = document.getElementById('antiSticker');
        if(startProductBarPos<0)startProductBarPos=findPosY(bar);

        if(pageYOffset>startProductBarPos){
            bar.style.position='fixed';
            bar.style.top=0;
            bar2.style.position='relative';
        }else{
            bar2.style.position='fixed';
            bar2.style.top=0;
            bar.style.position='relative';
        }

    };
	// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


    function findPosY(obj) {
        var curtop = 0;
        if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
            while (obj.offsetParent) {
                curtop += obj.offsetTop;
                obj = obj.offsetParent;
            }
            curtop += obj.offsetTop;
        }
        else if (obj.y)
            curtop += obj.y;
        return curtop;
    }
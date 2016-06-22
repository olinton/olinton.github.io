
    var startProductBarPos=72;
    window.onscroll=function(){
        var bar = document.getElementById('sticker');
        var bar2 = document.getElementById('antiSticker');
        if(startProductBarPos<0)startProductBarPos=findPosY(bar);

        if(pageYOffset>startProductBarPos){
            bar.style.position='fixed';
            bar.style.top=0;
            bar2.style.position='relative';
			var toTop = document.getElementById('return-to-top');
			toTop.style.display='block';
        }else{
            bar2.style.position='fixed';
            bar2.style.top=0;
            bar.style.position='relative';
			var toTop = document.getElementById('return-to-top');
			toTop.style.display='none';
        }
		
    };


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
function changeImage()
{
    var img = document.getElementById("bannerImg" + x);
    x = x + 1;
	if(!document.getElementById("bannerImg" + x);
		x = 1;
    doChangeImage();
}

function fadeImg(el, val, fade){
    val = val + (fade ? -1 : 1);
    if(val > 0 && val < 30){
        if(val < 2)
			el.style.opacity = 0;
		else
			el.style.opacity = (val+1) / 30;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}
function doChangeImage(){
    var img = document.getElementById("bannerImg" + x);
	fadeImg(img, 0, false);
	setTimeout("changeImage()", fadeTime);
	setTimeout(function(){fadeImg(img, 30, true);}, fadeTime - 50);
}
var images = ["/images/image_1.jpg", "/images/image_2.jpg", "/images/image_3.jpg", 
"/images/image_4.jpg", "/images/image_5.jpg", "/images/image_6.jpg"],
fadeTime = 7000,
x = 1;
setTimeout("doChangeImage()", 10);
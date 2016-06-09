function changeImage()
{
    var img = document.getElementById("bannerImg");
    img.src = images[x];
    x = (x + 1) % images.length;
    doChangeImage();
}

function fadeImg(el, val, fade){
    val = val + (fade ? -1 : 1);
    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}
function doChangeImage(){
	fadeImg(img, 0, false);
	setTimeout("changeImage()", fadeTime);
	setTimeout(function(){fadeImg(img, 100, true);}, fadeTime - 1000);
}
var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", 
"images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg", ],
fadeTime = 10000,
x = 1;
doChangeImage();
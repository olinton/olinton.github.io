function changeImage()
{
    var img = document.getElementById("bannerImg");
    img.src = images[x];
    x = (x + 1) % images.length;
    setTimeout("changeImage()", fadeTime);    
    setTimeout(function(){fadeImg(img, 100, true);}, fadeTime - 500);
    fadeImg(img, 0, false);
}

function fadeImg(el, val, fade){
    val = val + (fade ? -1 : 1);
    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 5);
    }
    else{
        el.style.opacity = 1.0;
    }
}

var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", 
"images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg", ],
fadeTime = 10000,
x = 1;
setTimeout("changeImage()", fadeTime);
function changeImage()
{
    var img = document.getElementById("bannerImg");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    fadeImg(img, 100, true);
    setTimeout("changeImage()", 5000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}

var images = [],
x = 0;

images[0] = "/images/image_1.jpg";
images[1] = "/images/image_2.jpg";
images[2] = "/images/image_3.jpg";
setTimeout("changeImage()", 5000);
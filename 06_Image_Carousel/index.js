var index = 0;

show_img(index)

function show_img(i){
    index += 1;

    var images = document.getElementsByClassName("image");
    console.log(images)

    var dots = document.getElementsByClassName("dot");

    for(i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if(index > images.length - 1){
        index = 0;
    }

    if(index < 0){
        index = images.length - 1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";
}

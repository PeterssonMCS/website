
var robo = document.getElementById("image");

onmousemove = function(e){
    let limites = robo.getBoundingClientRect();
    let midx = (limites.left + limites.right)/2;
    let midy = (limites.top + limites.bottom)/2;

    if(e.clientX >= midx & e.clientY >= midy){
        robo.src = "bitmap/br.png";
    }else if(e.clientX > midx & e.clientY < midy){
        robo.src = "bitmap/tr.png";
    }else if(e.clientX < midx & e.clientY > midy){
        robo.src = "bitmap/bl.png";
    }else if(e.clientX < midx & e.clientY < midy){
        robo.src = "bitmap/tl.png";
    }
}

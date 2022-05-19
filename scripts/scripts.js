<<<<<<< HEAD
barras = document.querySelectorAll(".barras");

for(n in barras){
    n.style.width = "10%";
=======
function mudarImagem(input){
    document.getElementById("picture").src = input;
}

var imagens = ["images/Cplusplus.png","images/CSS3.png","images/girl.jpg"];

let i = 0;
function iterarImagens(){
    if(i < 2) {
        i++;
    }else{
        i = 0;
    }
    document.getElementById("picture").src = imagens[i];
    setTimeout(iterarImagens,2000);
>>>>>>> 2c57fba475159091e3f2b3527e4a8694f73bba17
}
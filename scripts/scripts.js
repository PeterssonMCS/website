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
}
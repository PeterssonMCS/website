var habilidades = [70,50,70,90,80,100,70];
var i = 1;

//Modifica o tamanho das barras de acordo com os valores na variavel habilidades
function alterarBarra(){
    //extrai todas as barras
    let barras = document.querySelectorAll(".barras");
    let k = 0;
    //Modifica o tamanho individual de cada barra
    barras.forEach(barra => {
        if (habilidades[k] > i){
            barra.style.width = i+"%";
        }
        k = k+1;
    });
    if (i < 100){
        i = i+1;
        setTimeout(alterarBarra,10);
    }else{
        i = 100;
    }
}

//Adiciona o evento que verifica a box habilidades esta visivel
window.addEventListener('scroll', function() {
	//cria a variavel contendo a box
    let box_habilidades = document.querySelector('.habilidades');
    //extrai seus limites
	let limite = box_habilidades.getBoundingClientRect();
    //compara os limites para verificar se a box esta completamente visivel
	if(limite.top >= 0 && limite.bottom <= window.innerHeight) {
		alterarBarra();
	}
});

//altera o source da imagem para o endereço em input 
function alterarImg(input){
    document.getElementById('anos').src=input;
}
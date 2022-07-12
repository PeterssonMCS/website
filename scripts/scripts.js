
//altera o source da imagem para o endereço em input 
function alterarTexto(input){
    document.getElementById('texto-habilidades').innerHTML = input;
}

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
    },
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
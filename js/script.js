
var texto = {
    'css': 'CSS é a linguagem responsável por estilizar uma página da web, seja nas cores, fontes ou animações. Possuo 1 ano de experiência nessa habilidade.',
    'html' : 'HTML é a linguagem responsável por descrever a estrutura básica de um site, como por exemplo esse texto. Possuo 1 ano de experiência nessa habilidade.',
    'javascript' : 'Javascript é a linguagem responsável por deixar os sites mais dinâmicos, como por exemplo a mudança desse texto de acordo com a imagem. Possuo 1 ano de experiência nessa habilidade.',
    'cplusplus' : 'C++ é o sucessor da famosa linguagem C, sendo utilizada no desenvolvimento de aplicações desktop e embarcadas. Possuo 4 anos de experiência nessa habilidade.',
    'qt' : 'Qt é um sistema de desenvolvimento de interfaces de usuário para multi plataformas. Possuo 2 anos de experiência nessa habilidade.',
    'python' : 'Python é uma linguagem genérica utilizada em Machine learning e sistemas Back-end. Possuo 2 anos de experiência nessa habilidade.',
    'php' : 'PHP é a linguagem executada no lado do servidor capaz de gerar conteúdos dinâmicos em websites. Atualmente estudo esse habilidade.',
    'matlab' : 'Matlab é um programa utilizado para simulação de diversos sistemas de engenharia. Possuo 4 anos de experiência nessa habilidade.',
    'github' : 'Github é um sistema de controle e versionamento de códigos. Possuo 2 anos de experiência nessa habilidade.',
    'default' : 'Passe o mouse para saber mais',
};


var i = 0;
var input;
function alterarTexto(entrada){
    let barra = document.getElementById("barra-progresso");
    input = entrada;
    if (input == 'default'){
        i = 0;
        document.getElementById('texto-habilidades').innerHTML = texto['default'];
    }else{
        imprimirLetra();
    }
}

function imprimirLetra(){
    if (i <= texto[input].length){
        document.getElementById('texto-habilidades').innerHTML = texto[input].substr(0,i);
        i++;
        setTimeout(imprimirLetra,8);
    }
}

var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel);
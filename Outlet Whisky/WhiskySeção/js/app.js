/* Variaveis */
var sections = document.querySelectorAll("section"); //Selecionando as secoes
var textos = document.querySelectorAll("p"); //Selecionando os paragrafos
var card = document.querySelectorAll(".product-card"); //Selecionando os cards
var btn = document.querySelector("#btn-color"); //Selecionando o botao
var btn_compra = document.querySelectorAll(".compra");
var cor = 'Branco'; //Variavel Para Mudar Cor


btn.addEventListener('click', changeBackground);

//Função Para Mudar Fundo
function changeBackground(){
    if (cor == 'Branco'){
        //Mudando Cor Dos Paragrafos
        for(var i = 0;i < textos.length; i++){
            textos[i].style.color = '#FFF8F0';
        }

        //Mudando Cor Dos Cards
        for(var i = 0;i < card.length; i++){
            card[i].style.backgroundColor = '#050609';
            card[i].style.color = '#FFF8F0';
            card[i].style.transition = '0.5s';
        }

        for (var i = 0; i < sections.length; i++){
            sections[i].style.backgroundColor = '#050609';
            sections[i].style.color = '#FFF8F0'; //Titulos ficam brancos
            sections[i].style.transition = '0.5s';
        }
        cor = 'Preto';

    } else{

        //Mudando Cor Dos Paragrafos
        for(var i = 0;i < textos.length; i++){
            textos[i].style.color = '#050609';
        }
        
        for(var i = 0;i < card.length; i++){
            card[i].style.backgroundColor = '#FFF8F0';
            card[i].style.color = '#050609';
            card[i].style.transition = '0.5s';
        }

        for(var i = 0;i < sections.length; i++){
            sections[i].style.backgroundColor = '#FFF8F0';
            sections[i].style.color = '#000000';
        }
        cor = 'Branco';
    }
}

//Função Adicionar No Carrinho


function adicionarCarrinho(){
    alert("Produto Adicionado ao Carrinho");
}
for(var i = 0; i < btn_compra.length; i++){
    btn_compra[i].addEventListener('click', adicionarCarrinho);
}
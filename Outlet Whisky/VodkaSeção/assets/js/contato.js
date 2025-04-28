var cor = 'Branco';
var btn = document.querySelector("#btn-color");
var main = document.querySelector("main");
var body = document.querySelector("body");

btn.addEventListener('click', changeBackground);

function changeBackground(){
    if (cor == 'Branco'){
        main.style.backgroundColor = '#050609';
        main.style.color = '#FFF8F0';
        main.style.transition = '0.5s';
        cor = 'Preto';
    } else{
        main.style.backgroundColor = '#FFF8F0';
        main.style.color = '#050609';
        main.style.transition = '0.5s';
        cor = 'Branco';
    }
}
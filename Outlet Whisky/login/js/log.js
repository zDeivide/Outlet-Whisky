var email = localStorage.getItem("email");
var password = localStorage.getItem("password");
var mail_login = document.getElementById("box-email");
var pass_login = document.getElementById("box-senha");
var btn_login = document.getElementById("box-login");

btn_login.addEventListener('click', login);
function login(){
    if(email == mail_login.value && password == pass_login.value){
        alert("Login realizado com sucesso!");
        btn_login.href = "../Home/index.html";
        var log = true
        localStorage.setItem("log", log);
    } else{
        alert("Email ou Senha Incorretos!");
    }
}

//Função Para Mudar Fundo
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
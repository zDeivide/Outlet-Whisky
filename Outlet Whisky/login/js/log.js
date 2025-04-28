var email = localStorage.getItem("email");
var password = localStorage.getItem("password");
var mail_login = document.getElementById("box-email");
var pass_login = document.getElementById("box-senha");
var btn_login = document.getElementById("box-login");

btn_login.addEventListener('click', login);
function login(){
    if(email == mail_login.value && password == pass_login.value){
        alert("Login realizado com sucesso!");
    } else{
        alert("Email ou Senha Incorretos!");
    }
}
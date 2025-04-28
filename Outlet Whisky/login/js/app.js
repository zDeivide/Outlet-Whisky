var user = document.getElementById("box-name");
var password = document.getElementById("box-senha");
var confirmation = document.getElementById("box-confirmacao");
var email = document.getElementById("box-email");
var btn_cadastrar = document.getElementById("box-cadastrar");


btn_cadastrar.addEventListener('click', salvar);

function salvar(){
    
    if(password.value == confirmation.value && user.value != '' && email.value != ''){

            if('@' in email.value){
                email.value = email.value;
            } else{
                alert('Digite um endereço de email valido')
            }

            localStorage.setItem("user", user.value);
            localStorage.setItem("password", password.value);
            localStorage.setItem("email", email.value);
            alert("Cadastro realizado com sucesso!");
    } else{
        alert("Senhas Não Estão Iguais ou tem campos que não foram preenchidos!");
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
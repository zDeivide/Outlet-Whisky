var user = document.getElementById("box-name");
var password = document.getElementById("box-senha");
var confirm = document.getElementById("box-confirmacao");
var email = document.getElementById("box-email");
var btn_cadastrar = document.getElementById("box-cadastrar");
var log = false

btn_cadastrar.addEventListener('click', salvar);

function salvar(event){
    
    if(log == true){

    }
    
    if(user.value == '' || password.value == '' || confirm.value == '' || email.value == ''){
        event.preventDefault();
        alert("Preencha todos os campos");
    } else{
        if(password.value == confirm.value){
            localStorage.setItem("user", user.value);
            localStorage.setItem("password", password.value);
            localStorage.setItem("email", email.value);
            log = true
        }
    }
}



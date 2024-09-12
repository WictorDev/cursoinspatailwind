
let error = document.querySelector('erroMenssage')
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let errorMessage = ''

function logar(event) {

    event.preventDefault();

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    
    
    
    

    if(email == "admin@admin" && senha == "admin"){
        alert("sucess")
        
        window.location.href = "https://www.google.com";
    }else{alert("failure")}
    


}




document.querySelector('.login').addEventListener('click',() =>{
    
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value;



if(regex.test(email) == false ){

    errorMessage = 'Email Invalido'

}

if(email === undefined || senha === undefined){

    errorMessage = 'Preencha os campos a cima .'

}

})






error.textContent()
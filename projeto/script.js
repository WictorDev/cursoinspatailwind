
let error = document.querySelector('#msg')
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let errorMenssage = ''


document.querySelector('.login').addEventListener('click', (e) => {

    e.preventDefault()

    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value;

    if(email === "" && senha ===''){
        errorMenssage = 'Preencha a senha e o email'

    }else if (email === '') {
        errorMenssage = 'Preecha o campo e-mail.'

    } else if (senha === '') {
        errorMenssage = 'Preecha o campo senha.'

    } else if (regex.test(email) == false) {

        errorMenssage = 'Email Invalido'

    } else if (senha.length <= 5) {
        errorMenssage = 'Senha precisa conter a cima de 6 caracteres.'
    
    }else{
        errorMenssage = 'Não cadastrado '
    }
    
    error.textContent = errorMenssage
    
     if (email == "admin@admin.admin" && senha == "admin") {
        

        window.location.href = "https://www.google.com";
    } 

    console.log(error)

if( errorMenssage !== ''){
    error.style.color = 'Red';
}

}



)







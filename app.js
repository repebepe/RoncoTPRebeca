const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');
let entrar = false;

form.addEventListener("submit", e=>{

    e.preventDefault();
    let warnings = "";
    let regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let regexNum = /^\d{7,20}$/;

    if(!regexNombre.test(nombre.value)){
        warnings += `Nombre no válido <br>`;
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        warnings += `Correo no válido <br>`;
        entrar = true;
    }

    if(!regexNum.test(telefono.value)){
        warnings += `Número no válido <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }
    else{
        parrafo.innerHTML = "Recibimos tu consulta, ¡muchas gracias!";
    }
    
})
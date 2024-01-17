'use strict'
// FORMULARIOS

// Seleccionar formularios
// 1er manera
const primerForm = document.forms[0];
console.log(primerForm);

//2da manera
const formRegistro = document.forms.registro;
console.log(formRegistro);

// Acceder a los elementos del formulario. En este caso el input nombre
const formLogin= document.forms.inicioSesion;
// console.log(formLogin);
const nombreUsuario = formLogin.elements.nombre;
console.log(nombreUsuario);

// Ahora vamos a trabajar con el input email
const inputEmail = document.querySelector('input[name="email"]');
const form = inputEmail.form;
console.log(form);

// Accedera los valores de un formulario 
const sendButton = document.getElementById("enviar");
sendButton.addEventListener('click', function(event){
    
    event.preventDefault();

    const user = document.getElementById("usuario").value;
    const name = document.getElementById("nombre").value;
    const country = document.getElementById("pais").value;
    const selectValue = document.querySelector("input[name='Opciones']:checked").value;

    console.log(user);
    console.log(name);
    console.log(country);
    console.log(selectValue);
});
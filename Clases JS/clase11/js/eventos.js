'use strict'

// Conocer y modificar atributos
const btnEnviar = document.getElementById("botonEnviar");
console.log(btnEnviar.getAttribute("type"));

// Deshabilitar un boton
btnEnviar.setAttribute("disabled", true);

// Volver a activar el botón
btnEnviar.removeAttribute("disabled");

// Comprobar si el elemento contiene un atributo. Ya sea de clase, id o cualquier otro tipo. 
console.log(btnEnviar.hasAttribute("id"));

/* EVENTOS

    Hay dos maneras de poder aplicar eventos:
        - métodos tradicional
        - método actual

*/

// Método tradicional
btnEnviar.onclick = function (){
    console.log("Acabas de realizar un click utilizando el método tradicional");
}

// Método actual
const btnStart = document.getElementById("botonStart");
btnStart.addEventListener('click', function(){
    console.log("Acabas de realizar un click utilizando el método actual");
});

// Agregar un color al párrafo 1
const btnColor = document.getElementById("botonColor");
const parrafo1 = document.getElementById("texto1");

const cambiarColor = function(){
    parrafo1.style.color= "green";
}

btnColor.addEventListener('click', cambiarColor);

// Event objects
const informacionClick = function(event){
    console.log(event);
}

btnColor.addEventListener("click", informacionClick);

// Teniendo en cuenta los 3 botones creados de html, css y js que están el archivo de HTML, debemos acceder al elemento especifico al que se está haciendo click. 

function mostrarMensaje(event){

    const elemento = event.target.id; 
    // console.log(elemento);

    if(elemento === 'boton_html' ){
        console.log("Hiciste click en el botón HTML");
    }

    else if(elemento === 'boton_css'){
        console.log("Hiciste click en el botón CSS");
    }

    else if(elemento === 'boton_js'){
        console.log("Hiciste click en el botón JS");
    }

}

const botones = document.querySelectorAll("button");
botones.forEach(function(boton){
    boton.addEventListener("click", mostrarMensaje);
});

// Más eventos 
// Doble click
btnColor.addEventListener('dblclick', () => {
    parrafo1.style.color = "orange";
});

// Detectar cuando el mouse se acerca sobre un elemento
btnStart.addEventListener('mouseover', () => {
    console.log("¡Hola!");
});

// Detectar cuando el mouse se eleja del elemento 
btnStart.addEventListener('mouseout', () => {
    console.log("¡Adiós!");
});

// Detectar cuando estamos dentro de un elemento input
const ingresoDato = document.getElementById("ingresoDeDato");
ingresoDato.addEventListener('focus', () => {
    console.log("Ingresaste al input");
});

// Detectar cuando nos vamos del input
ingresoDato.addEventListener('blur', () => {
    console.log("Te fuiste del input");
});

// Eventos de teclado
ingresoDato.addEventListener('keyup', (event) => {
    console.log(`Estamos presionando la tecla: ${event.key}`);
});


// Prevenir el comportamiento predeterminado de un elemento
const webHack = document.getElementById("webOficialHack");
webHack.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Acabas de realizar un click en el enlace");
});
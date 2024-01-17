'use strict'

// Pasando estilos a través de una variable en el propio código de JS
const parrafo1 = document.getElementById("texto1");
console.log(parrafo1);
parrafo1.style.color= "green";
parrafo1.style.backgroundColor= "black";

// Pasar estilos mediante una clase ya está creada previamente en el archivo style.css
const parrafo2 = document.getElementById("texto2");
parrafo2.classList.add("estilo");

// Eliminar un estilo que viene a través de una clase
parrafo2.classList.remove("estilo");

// Acceder al texto de un elemento con innerHTML
console.log(parrafo1.innerHTML);


// Acceder al texto de un elemento con textContent
console.log(parrafo2.textContent);

// Cambiando un valor por otro
const parrafo3 = document.getElementById("texto3");
parrafo3.textContent = "Estamos cambiando al texto 3";

// Iterando una sección que contiene 2 elementos en este caso <p> 
const parrafosDeLaSeccion = document.querySelectorAll("section>p");
// console.log(parrafosDeLaSeccion);

for (const parrafo of parrafosDeLaSeccion) {
    parrafo.style.color= "orange";
}

// Iterar la lista de tareas y agregarle un estilo
const tareas = document.getElementsByClassName("listaDeTareas");

for(let i= 0; i<tareas.length; i++){
    tareas[i].style.color="blue";
}

// Agregar un nuevo elemento al DOM
const nuevoParrafo = document.createElement("p");
// console.log(nuevoParrafo);
nuevoParrafo.textContent = "Hola!";
document.getElementById("saludo").appendChild(nuevoParrafo);

/* Otra manera de agregar elementos a la página 

    elemento.insertAdjacentHTML(posicion, contenidoAgregado);


*/

const webOficial = document.getElementById("webOficialHack");

webOficial.insertAdjacentHTML("beforeend",  

    `<p> A continuación te dejamos el link de la web oficial de Hack a Boss </p> 

    <a href = "https://www.hackaboss.com/"> Link a la web </a> `
);

// EJERCICIO: teniendo en cuenta la lista desordenada que tenemos en el html, en este caso la lista de tareas 1, deberás agregar un nuevo item a la lista desde JS. Este item deberá decir "Tarea 4" y a su vez deberá heredar el color que ya tenian los demas items. 

document.getElementsByName
'use strict'

// EJERCICIO: crear un array con los siguientes números: 1200, 650, 70, 20, 900, 730, 150, 583, 710. Deberás mostrar los números mayores que 200 y menores que 800.

const numeros = [1200, 650, 70, 20, 900, 730, 150, 583, 710];

for (let numero of numeros ) {

    if(numero > 200 && numero < 800){
        console.log(numero);
    }

}

// MÁS MÉTODOS DE ARRAYS

const colores = ["rojo", "verde", "azul", "turquesa", "naranja"];
colores.splice(3,0, "amarillo");
// colores.splice(0, 1, "violeta");
// colores.splice(3,2,"amarillo"); --> eliminamos 2 valores desde la posición 3 en adelante
console.log(colores);

// comprobar si un elemento está dentro del array
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.includes(5)); // true
console.log(numbers.includes(15)); // false

// Devolver el índice de la primera ocurrencia de un elemento
console.log(numbers.indexOf(8)); // Está en posición 7

// Convertir un string en un array 
const nombre = "Pedro Acosta";
const nombreArray = nombre.split(" ");
console.log(nombreArray);

// Convertir un array en un string
const cadenaDeNumeros = numbers.join(" ");
console.log(cadenaDeNumeros);

// Invertir el orden de los elementos de un array
numbers.reverse();
console.log(numbers);

// Rellenar un array con un valor especifico
numbers.fill(100, 2, 5); // fill(valor, inicio, fin) La última posición no está incluida
console.log(numbers);

// DESTRUCTURING EN ARRAYS 
const numerosPares = [2,4,6,8,10]; 
const [primerNumeroPar, segundoNumeroPar, ...restoDeNumerosPares] = numerosPares;

console.log(primerNumeroPar); // 2
console.log(segundoNumeroPar); // 4
console.log(restoDeNumerosPares); // [6,8,10]

//Método forEach()
// trabajando con numerosPares
numerosPares.forEach((num, indice, array) => {
    console.log(num, indice, array);
});

// trabajando con colores utilizando función flecha
colores.forEach( elementoColor => {
    console.log(elementoColor);
}); 

// trabajando con colores utilizando un function
colores.forEach( function (color) {
    console.log(color);
});

// EJERCICIO: dado el array numbers deberás utilizar el método forEach() para sumar 5 a cada número de este array y luego mostrar el resultado por consola. 

numbers.forEach(numero => {
    numero += 5;
    console.log(numero);
  });
  


// some() --> utilzando el array de colores
// const colores = ["rojo", "verde", "azul", "turquesa", "naranja"];
console.log(colores.some( nombreColor => nombreColor === "negro"));

// every()
console.log( colores.every(nombreColor => nombreColor.length >= 5));

// find() 
function buscarNombreUsuario(nombres, nombreEncontrado) {

    nombres = ["Ana", "Juana", "Carlos", "Elena", "Matias"];

    nombreEncontrado = nombres.find( nombreUsuario => nombreUsuario === "Rodolfo"); // Aca encuentra el valor Ana y eso es lo que se guarda en la variable

    if (nombreEncontrado) {
        console.log(`Se encontró el nombre: ${nombreEncontrado}`);
    } else {
        console.log(`No se ha encontrado ningún nombre ${nombreEncontrado}`);
    }

}

buscarNombreUsuario();

// filter()
const numerosContiguos = [1,2,3,4,5,6,7,8,9,10];
const numPares = numerosContiguos.filter(numero => numero % 2 === 0 );
console.log(numPares);

// Versión 1 : Creando un array vacío donde se guardan edades que salen de un array de objetos 
function datosUsuarios () {

    const usuarios = [
        {nombre: "Rodrigo", edad: 22},
        {nombre: "Florencia", edad: 30}
    ];

    // console.log(usuarios);

    const edades = [];

    for(let i= 0; i<usuarios.length; i++){
        edades.push(usuarios[i].edad);
    }

    console.log(edades); // [22,30]

}

datosUsuarios();


// Versión 2: Creando un array vacío donde se guardan edades que salen de un array de objetos.

function datosUsuarios2doEjemplo (){

    const usuarios = [
        {nombre: "Rodrigo", edad: 28},
        {nombre: "Florencia", edad: 60}
    ];

    const edades = usuarios.map(edadUsuario => edadUsuario.edad);

    console.log(edades); // [28,60]

}

datosUsuarios2doEjemplo();

// reduce()

const numerosAReducir = [1,2,3,4,5];        
const suma = numerosAReducir.reduce(function (numero, acumulador) {
    return numero + acumulador; // suma --> 15
}, 0);

console.log(suma);


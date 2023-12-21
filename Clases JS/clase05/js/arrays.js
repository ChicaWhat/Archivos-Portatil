'use strict'

// ARRAYS
// Conociendo algunas maneras de creación de arrays

// 1- Arrays Literales 
const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

console.log(dias); 
console.log(dias.length);

const prueba = [1, "Lunes", {}, ["Juan", "Martina"], true, false]; 
console.log(prueba);

// 2- Constructor de Arrays
const numeros = new Array(1,2,3,4,5);
console.log(numeros);

// 3- Operador Spread (...)
const array1 = [1,2,3];
const array2 = [...array1];
console.log(array2);

const array3 = [4,5,6];
const array4 = [...array1, ...array3]; // Unir el array1 y el array 3 en un nuevo array 
console.log(array4);

const letras1 = ["A", "B", "C"];
const letrasFinales = [...letras1, "D", "E", "F"];
console.log(letrasFinales);

// 4- Método from()
const arraySaludo = Array.from("Hola");
console.log(arraySaludo);

// Array.of()
const miArray = Array.of();  // Creando un array vacío 
console.log(miArray);
const miArray2 = Array.of("Hola", "Adios");
console.log(miArray2);
const miArray3 = Array.of(1, 10, 200);
console.log(miArray3);

// Otra manera de crear un array vacío 
const datos = [];
console.log(datos);

// Sobreescribir un valor del array 
const productos = ["SmartTv", "Notebook", "Impresora", "Tablet", "Smartphone", "Aire Acondicionado"];
productos[2] = "Monitor";
console.log(productos);

// Agregar un valor al array conociendo el índice
productos[6] = "Cafetera"; 
console.log(productos); 

// Agregar un valor en la primer posición
productos.unshift("Batidora", "Licuadora");
console.log(productos);

// Agregar un valor en la última posición
productos.push("Tostadora", "Audífonos");
console.log(productos);

// Eliminar el primer valor 
productos.shift();
console.log(productos);

// Eliminar el último valor 
productos.pop();
console.log(productos);

// Eliminar un valor según su indice
delete productos[3];
console.log(productos);
productos[3] = "Webcam"; // Agregamos un valor a la posición previamente vacía
console.log(productos);

// Extraer un rango de valores
const productosExtraidos = productos.slice(2,5); // 5 no incluido
console.log(productosExtraidos);

// Modificar el último elemento del array 
productos[productos.length-1] = "PS5";
console.log(productos);

// Ordenar valores de inicio a fin 
const letrasOrdenadas = ["x", "a", "y", "r", "n", "b"];
letrasOrdenadas.sort();
console.log(letrasOrdenadas);

const numerosOrdenados = [8, 200, 75, 98, 1];
numerosOrdenados.sort();
console.log(numerosOrdenados);

// En la clase 06 se continuará con el método sort()

// RECORRER ARRAYS 

// 1- For Loop 

function arrayDeNombres(){

    const nombres = ["Raul", "Marcela", "Stella", "Alexis", "Paula"]; // 0 a 4 
                    
                    // 4 < 5
    for(let i = 0; i<nombres.length; i++){
        console.log(nombres[i]);
    }

}

arrayDeNombres();

// 2- For of 

function nombresUsuarios (){

    const nombres = ["Raul", "Marcela", "Stella", "Alexis", "Paula"]; // 0 a 4 

    for ( let nombre of nombres ){
        console.log(nombre);

    }
}

nombresUsuarios();

// EJERCICIO: crear un array con los siguientes números: 1200, 650, 70, 20, 900, 730, 150, 583, 710. Deberás mostrar los números mayores que 200 y menores que 800.
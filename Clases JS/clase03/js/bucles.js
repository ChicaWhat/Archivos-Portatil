'use strict'

// BUCLES

// 1. Bucle While 
// Mostrar todos los números del 0 al 20 yendo de 2 en 2
let contador = 0;

while (contador <= 20 ) {
    console.log(contador); // 
    contador+=2;
}

// Contador descendente del 10 al 0
let count = 10;

while (count >= 0) {
    console.log(count); // 8
    count--;
}

// Mostrar la suma de los números que irán desde el 1 hasta el 10 inclusive. Mostrar el resultado final de la suma. 
let numero = 1; // 10
let suma = 0; // 45

while(numero <= 10){
    // suma = numero + suma; // 55
    suma+= numero;
    // console.log(suma);
    numero++;
}

console.log(`La suma de los números del 1 al 10 es: ${suma}`);

// 2. Bucle Do While
// Contador ascendente del 1 al 10
let aux = 0;

do {
    aux++;
    console.log(`El número es: ${aux}`);
} while(aux <=9)

// 3. Bucle For Loop(para)
// Contador ascendente del 1 al 5

for(let i=1; i<=5; i++){
    console.log(i);
}

// 1er Versión: Mostrar todos los números divisibles por 4 entre 0 y 50
for(let i=0; i<= 50; i++){

    if(i%4 === 0){
        console.log(i);  // 4 
    }
}

// 2da Versión: Mostrar todos los números divisibles por 4 entre 0 y 50
for(let i=0; i<=50; i+=4){
    console.log(i);
}

// Uso del break (corte)
let numeroParEncontrado = null;

for(let i = 1; i<=10; i++){

    if(i%2===0){
        numeroParEncontrado = i;
        console.log(`El primer número par encontrado es: ${numeroParEncontrado}`);
        break;
    }

}

// Uso de Continue (saltar una iteración)
// Mostrar todos los números del 1 al 6, salteando el 4
for(let i= 1; i<=6; i++){

    if(i === 4){
        continue;
    }
    console.log(i);

}

// Crear un patrón visual de una escalera de asteriscos
let escalonesAsteriscos = 5;

for(let i=1; i <= escalonesAsteriscos; i++){

    let escalon = '*'.repeat(i); 
    console.log(escalon); 

}
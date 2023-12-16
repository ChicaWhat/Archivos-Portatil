'use strict'

// Generar número random entre 1 y 6.
// variable numeroDado
let numMin = 1;
let numMax = 6;
let numeroDado = Math.floor(Math.random()*(numMax - numMin + 1)+ numMin);

// console.log((Math.floor(Math.random()*(numMax - numMin + 1)+ numMin)));


if(numeroDado === numMin){
    console.log(`Avanza ${numeroDado} casilla`);
}
else {
    console.log(`Avanza ${numeroDado} casillas`);
}

// La putísima clave en este ejercicio es que debía de usar === para decir que, si numeroDado es exactamente igual a numMin, entonces la primera condición es verdadera. Sino es falsa.

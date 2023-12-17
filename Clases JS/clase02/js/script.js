'use strict'

// let edad = +prompt("¿Cuántos años tenes?");
// console.log(edad);
// alert(edad);

// let respuesta = confirm("¿Estás seguro/a de que deseas continuar en nuestro sitio web?");

// OPERADORES ARITMÉTICOS (suma, resta, multiplicación, división, módulo, exponente, incremento, decremento)

// módulo %
let sacandoModulo = 10 % 3; // Resultado = 1
console.log(sacandoModulo);

// exponente
let sacandoExponente = 3 ** 3; // 27
console.log(sacandoExponente);

// incremento y decremento
let i = 0;
console.log(i++); // post incremento. Primero retorna el valor original , luego hace el incremento
// console.log(i=i+1); 
console.log(i); // Verifico si la variable fue incrementada. Resultado es 1
console.log(i = i+2); // Vale 3
console.log(++i); // pre incremento --> resultado 4
console.log(i--); // Muestra 4 en consola, pero internamente ya hay un 3
console.log(i); // Resultado 3

// OPERADORES DE COMPARACIÓN 

/* OPERADORES LÓGICOS 

    && --> and
    || --> or
    ! --> not 
*/

// PARA PENSAR SIN VER EN LA CONSOLA
// ¿True o false?

// 1° expresión
let x = 32;
let y = "a";

y === "b" && x >= 32 
// false  && true
// false


// 2° expresión
let a = 5;
let b = 8;

console.log( ! (a == "5" || a === b) && ! (b != 8 && a <= b ));
// ! (true || false ) && ! (false && true)
// ! (true) && ! (false)
// false && true 
// false

// CONDICIONALES
// IF ELSE
/*
    if (condicion){
        se va a ejecutar el código siempre y cuando se cumpla la condición
    }

    else{
        se va a ejecutar el código cuando NO se cumpla la condición
    }

*/

// Detectar si un número es par o impar
let numero = 11;

if (numero % 2 === 0){
    console.log("El número es par");
}

else {
    console.log("El número es impar");
}


// Preguntar al usuario cómo se llama y si su nombre contiene más de 4 letras se deberá informarle que tiene un nombre largo. Caso contrario tiene un nombre corto. 

// let nombre = prompt("Decime tu nombre y te diré si es largo o corto");

// if (nombre.length > 4) {
//     console.log("Tu nombre es largo en cuestión de caracteres");
// } else {
//     console.log("Tu nombre es corto en cuestión de caracteres");
// }

// ANIDACIÓN 
let edad = 13;
let tienePermisoDeConducir = true;

if(edad >= 18){
    console.log("Sos mayor de edad");

    if(tienePermisoDeConducir){
        console.log("Tenes permiso para conducir un coche y moto");
    }

    else{
        console.log("No tenes permiso para conducir!");
    }
}

else{
    console.log("Sos menor de edad!");
}

// CONDICIONAL IF , ELSE IF, ELSE (tenemos 2 condiciones)

/* --- EJERCICIO: número positivo y número negativo 

Debemos pedirle al usuario que nos diga un número. 
Si el número que nos brinda es positivo, entonces informarle "El número que has elegido es positivo". 
Si el número que nos brinda es negativo, entonces informarle "El número que has elegido es negativo". 
Si la persona ha ingresado un dato que no es numérico informarle que el dato no es un valor numérico válido. 

Extra: ¿qué sucede en el caso que la persona diga que el número es un 0 (cero)?
*/

// let num = +prompt("Ingresá un número");

// if(num > 0){
//     console.log("El número es positivo");
// }

// else if(num < 0){
//     console.log("El número es negativo");
// }

// else if(num === 0){
//     console.log("Cero es un número neutral");
// }

// else{
//     console.log("El valor que has ingresado no es un número válido");
// }

/* EJERCICIO: Preguntarle al usuario qué hora es actualmente e informarle cuáles son los turnos del día en base a su horario. Teniendo en cuenta lo siguiente: 

- Turno mañana es de 6 a 14
- Turno tarde es de 14 a 22 
- Turno noche es de 22 a 6 

*/

// OPERADOR TERNARIO (manera más corta de escribir un if/else)
// Número par o impar

let number = 11;
let esPar = number % 2 === 0 ? "El número es Par" : "El número es impar";
console.log(esPar);


'use strict'
// SWITCH
// Recrear un semáforo

let colorSemaforo = "amarillo";
let accion;

switch (colorSemaforo) {
    case "verde":
        accion = "puedes avanzar!";
        break;
    
    case "amarillo":
        accion = "preparate para detenerte!";
        break;

    case "rojo": 
        accion = "frena!!";
        break;

    default:
        accion = "Estado del semáforo no válido"
        break;
}

console.log(`El semáforo está en color ${colorSemaforo} ${accion}`);

// Ejercicio: días de la semana
// let numeroDeDia = +prompt("Decime en qué número de día de la semana estás");
// let tipoDeDia;

// switch (numeroDeDia) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         tipoDeDia = "día laborable";
//         break;
    
//     case 6:
//     case 7:
//         tipoDeDia = "fin de semana";
//         break;

//     default:
//         tipoDeDia = "un número de día no es válido";
//         break;
// }

// console.log(`El día número ${numeroDeDia} es un ${tipoDeDia}`);


// CONVERSIONES
// 1- de número a cadena 
let num = 20;
let cadena1 = num.toString(); // "20"
let cadena2 = num + ""; // "20"

console.log(cadena1);
console.log(cadena2);

// 2- de cadena a número
let cadena3 = "50";
let num1 = parseInt(cadena3);
let num2 = Number(cadena3);
let num3 = +cadena3;

console.log(num1, num2, num3);

// 3 - A booleano
let cadenaVacia = "";
let cadenaCompleta = "Hack a Boss";
let num4 = 0;
let num5 = 1;
let booleano1 = Boolean(cadenaVacia); // false
let booleano2 = Boolean(cadenaCompleta); // true
let booleano3 = Boolean(num4); // false
let booleano4 = Boolean(num5); // true

console.log(booleano1);
console.log(booleano2);
console.log(booleano3);
console.log(booleano4);

// CASOS ESPECIALES DE COERCIÓN DE JS
console.log(1+2+"3"); // "33"
console.log("4" + 5 + 6); // "456"
console.log("4" + 5 * 6);  // "430"
console.log("4" + (5 + 6)); // "411"
console.log("4" + 5 - 6); // 39 
console.log("9" - 3); // 6 
console.log(10 - "2"); // 8 
console.log(true + true); // 2 
console.log("5" * "6"); // 30 
let number = 20 - "x";
console.log(number) // NaN 



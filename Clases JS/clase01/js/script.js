'use strict'

// OBJETO CONSOLE
console.log("Hola");
console.log(20+3);
console.log(20,45,2000);
console.error("Este es un mensaje de error");
console.info("Este es un mensaje informativo"); 
console.warn("Este es un mensaje de aviso");

// VARIBLE --> let y const (ES6)

//let
let nombreUsuario = "Juana";
console.log(nombreUsuario);
nombreUsuario = "Pedro";
console.log(nombreUsuario);
// let nombreUsuario = "Pepe";

// const 
const dni = "12345678A";
console.log(dni);
// dni = "12345678B";
// console.log(dni);

/* TIPOS DE DATOS: 

    - tipos de datos primitivos: números (number), cadenas de textos (strings), booleanos(true, false), null(ausencia de un valor), undefined(falta de asignación de un valor).

    - tipos de datos de Objetos: objetos y arrays
*/

// 1er Ejemplo
let x = 15;
let y = x;
console.log(x);
console.log(y);
y = 20;
console.log(y);
console.log(x);

//2do ejemplo
let mensaje = "Hola";
let saludo = mensaje; // Hola
console.log(saludo);
saludo = "Hola, mundo";
console.log(mensaje);
console.log(saludo);

// undefined 
let variableSinValor; 
console.log(variableSinValor);

// null
let variableNula = null;
console.log(variableNula);

// Booleano (true | false)
let usuarioActivo = true;

// Tipo de dato de objetos (esto lo veremos más adelante):
// Objeto
let coche = {
        color: "negro",
        marca: "Ford",
        modelo: "Focus"
    };

// Array
let productos = ["Laptop", "Monitor", "Mouse", "Tablet"];

// Detectando el tipo de dato
console.log(typeof mensaje);

// TRABAJANDO CON STRINGS
// template literals
let mensaje1 = "Hola";
let mensaje2 = "Mundo";
// let mensajeFinal = mensaje1 + " " + mensaje2;
let mensajeFinal = `${mensaje1} ${mensaje2}`;
console.log(`El mensaje final es: ${mensajeFinal}`);

// concat
let mensaje3 = "Hola";
let mensaje4 = "Mundo";
let mensajeFinal2 = mensaje3.concat(" ").concat(mensaje4);
console.log(mensajeFinal2);

// Sacar la logitud de un array
console.log(productos);
console.log(productos.length);

// Sacar la longitud de un string accediendo a un caracter especifico
console.log(mensajeFinal.length); // 10 - 1 = 9
console.log(mensajeFinal.charAt(mensajeFinal.length-1));

// TRABAJANDO CON NÚMEROS 
//parseInt
console.log(parseInt(15.2));

// parseFloat
console.log(parseFloat(15.2));

// Number
console.log(Number(123));
console.log(Number(123.49));
console.log(Number("hola")); // NaN --> no hay un número
console.log(Number(true)); // 1
console.log(Number(false)); // 0 

// isNaN
let valor1 = 20;
let valor2 = "Hola";
// Vamos a comprobar si los valores son NaN
console.log(isNaN(valor1)); // false
console.log(isNaN(valor2)); // true

/* isFinite - un número finito es un número real que NO ES:
    - infinito negativo
    - infinito positivo
    - NaN
*/

let numero1 = 42;
let numero2 = Infinity;
let numero3 = -Infinity;
let numero4 = NaN;
console.log(isFinite(numero1)); // true
console.log(isFinite(numero2)); // false
console.log(isFinite(numero3)); // false
console.log(isFinite(numero4)); // false

// Number.isInteger()
let numero5 = 25;
let numero6 = 20.56;
console.log(Number.isInteger(numero5)); // true
console.log(Number.isInteger(numero6)); // false

// Aritmética con JS utilizando el objeto Math
console.log(Math.pow(2,3)); 
console.log(Math.round(1.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(9.7));
console.log(Math.max(200, 5000, 1500));
console.log(Math.min(10, 300, 3));
console.log(Math.random());

// Mostrar los números aleatorios entre 5 y 10 
const valorMin = 5;
const valorMax = 10;          
const numeroAleatorioFinal =  Math.floor( Math.random() * (valorMax - valorMin + 1) + valorMin ); 
                                // [0, 1)    *   10 - 5 + 1 = 6  --> [0,6)
                                // [0, 5) + 5 -->  [5, 10)
                
// * El Math.floor redondeará hacia abajo logrando tener como resultado un número entero entre el rango de [0, 5)
console.log(numeroAleatorioFinal);


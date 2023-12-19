'use strict'

// DESAFÍOS DE REPASO:

// DESAFÍO 1: Mostrar la suma de los números que irán desde el 1 hasta el 10 inclusive. Mostrar el resultado final de la suma. Se debe utilizar un bucle for

let sumandoNumeros = 0;

for(let i=1; i <=10; i++){
    sumandoNumeros+=i;
}
console.log(`La suma de los números con el bucle for del 1 al 10 es: ${sumandoNumeros}`); // Resultado 55

// DESAFÍO 2: Mostrar los números desde 800 hasta 100 inclusive, bajando de 50 en 50. No mostrar los números 500 y 400.
for (let numero = 800; numero >= 100; numero -= 50) {

    if (numero !== 500 && numero !== 400) {
    console.log(numero);
    }
}


// FUNCIONES
// Sin parámetros
function saludar() {
    console.log("Hola!!");
}

saludar();

// Con parámetros
// 1er Versión: Realizando la suma de dos números
function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado; // --> expulsamos el valor fuera de la función
    // console.log("holaaa"); --> no se ejecuta
}

suma(5, 28);
// suma(90, 45);
// suma(120, 34);

// Una vez obtengas el resultado de la función suma() deberás multiplicar ese resultado a 2. Luego mostrar el resultado de esa multiplicación:
let duplicar = suma(20, 40)*2;
console.log(duplicar);

// 2da versión
function sumandoNumeros(num1, num2, resultado){
    resultado= num1 + num2;
    console.log(resultado);
}
sumandoNumeros(23, 56);

// 3er versión
function sumandoDosNumeros(){
    let num1 = +prompt("Ingresa tu primer número para realizar la suma");
    let num2 = +prompt("Ingresa tu segundo número para finalizar la operación");
    let resultado = num1 + num2;
    console.log(resultado);
}
// sumandoDosNumeros();

//4ta versión
function sumarNumeros(num1, num2, resultado){
    num1 = +prompt("Ingresa tu primer número para realizar la suma");
    num2 = +prompt("Ingresa tu segundo número para finalizar la operación");
    resultado = num1 + num2;
    console.log(resultado);
}

// sumarNumeros();

// FUNCIONES ANIDADAS
// Crear una pequeña calculadora 

function calculadora(num1, num2) {

    function sumar(){
        return num1 + num2;
    }

    function restar(){
        return num1 - num2;
    }

    function multiplicar(){
        return num1 * num2;
    }

    function dividir(){
        return num1 / num2;
    }

    let resultadoSuma = sumar();
    let resultadoResta = restar();
    let resultadoMultiplicacion = multiplicar();
    let resultadoDivision = dividir();

    console.log(`El resultado de la suma es: ${resultadoSuma}`);
    console.log(`El resultado de la resta es: ${resultadoResta}`)
    console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);
    console.log(`El resultado de la división es: ${resultadoDivision}`);
    
}

calculadora(12, 3);
calculadora(20, 10);

// FUNCIONES ANÓNIMAS
let productos = function (nombre){
    return `El nombre del producto es: ${nombre}`;
}
console.log(productos("cafetera"));

// Realizando la versión anterior a través de un function común para ver las diferencias: 
function productos2 (nombre) {
    return `El nombre del producto es: ${nombre}`;
}
console.log(productos2("sandwichera"));


// SCOPE: local y global 
// 1er ejemplo
let nombre = "Joaquin";

function saludo(){
    let nombre = "Juana";
    return nombre;
}

console.log(saludo()); // Juana
console.log(nombre); // Joaquín 

// 2do ejemplo
// Si inicializamos una variable global, le das un valor dentro de la función y la retornas... entonces el valor será guardado en la variable global. 

let apellido;

function retornarVariable(){
    apellido = "Silva";
    return apellido;
}

console.log(retornarVariable()); // Silva 
console.log(apellido); // Silva 

/* EJERCICIOS DE TAREA:

    1er ejercicio: Saludar a un usuario a través de su nombre utilizando function.
    2do ejercicio: Crear un function que permita sacar el 10% de un número dado
    3er ejercicio: Calcular el área de un triángulo (base*altura/2)

*/
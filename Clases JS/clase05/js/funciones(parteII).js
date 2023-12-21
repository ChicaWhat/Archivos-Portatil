'use strict'

// PENSAR SIN VER EN CONSOLA. ¿QUÉ DEVUELVE CADA FUNCIÓN?

// 1er expresión
function test1(x, y) {
    return y - x;
  }
  
  console.log(test1(10, 40)); // 30
  

  // 2do expresión
  function test2(x, y) {
    return x * 2;
    console.log(x);
    return x / 2;
  }
  
  console.log(test2(10)); // 20

  /* ARROW FUNCTION (función flecha)

  const nombreFuncion = (parametros) => {
    instrucciones de la función
    return valor
  }

  */

// 1er ejemplo sin parámetros
  const saludo = () => {
    return "Hola";
  }

  console.log(saludo());

// Haciendo el ejercicio anterior pero con function
function saludarUsuario(){
    return "Hola";
}

console.log(saludarUsuario());

// 2do ejemplo 
const saludando = () => "Hola gente!";
console.log(saludando());

// 1er ejemplo con parámetros
const producto = nombreProducto => `El producto comprado es: ${nombreProducto}`;
console.log(producto("PS5"));

// 2do ejemplo
const suma = (num1, num2) => num1 + num2;
console.log(suma(10, 6));
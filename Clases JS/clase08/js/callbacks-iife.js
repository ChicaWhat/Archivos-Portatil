'use strict'

// CALLBACK: es una función que se pasa como argumento a otra función y se ejecuta después de que complete una tarea especifica. 

// 1er ejemplo: creando una función que tome un número y un callback para imprimirlo. 

function imprimirNumero (numero, callback){
    callback(numero);
}

imprimirNumero(42, function (num) {
    console.log(`El número es: ${num}`);
}); 

// 2do ejemplo con función anónima
const ejecutarProceso = callback => {
    console.log("Inicio del proceso...");
    callback();
    console.log("Fin del proceso!");
}

ejecutarProceso( () => {
 
});

// 3er ejemplo
const sumandoNumeros = (a, b, operacion, callback) => {
    callback(operacion(a,b));
}

sumandoNumeros(3, 5, (x,y) => x+y, resultado => console.log(`El resultado es: ${resultado}`) );


/*  IIFE (Immediately Invoked Function Expression = Expresión de función ejecutada inmediatamente) - es una técnica que te permite ejecutar funciones inmediatamente después de su declaración. 
Este tipo de funciones son útiles para encapsular variables y funciones dentro de un ámbito local y evitar conflictos con variables globales.

    (function(){
        Acá estará el código a ejecutar inmediatamente
    })();

*/

// 1er ejemplo
(function(nombre){
    console.log(`Hola ${nombre}`);
})("Pablo");

// 2do ejemplo 
(function (numero1, numero2, resultado){
    resultado = numero1 + numero2;
    console.log(resultado);
})(5, 20);
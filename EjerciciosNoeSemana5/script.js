'use strict'

/* EJERCICIOS DE TAREA:

    1er ejercicio: Saludar a un usuario a través de su nombre utilizando function.
    2do ejercicio: Crear un function que permita sacar el 10% de un número dado
    3er ejercicio: Calcular el área de un triángulo (base*altura/2)

*/

// - Ejercicio 01 - //

function saludarUsuario (nombre) {
    let mensaje = `Bienvenid@ ${nombre}`;
    console.log(`${mensaje}`);
}

saludarUsuario('Sofi');
saludarUsuario("Pepito Grillo");

/*  He creado una función cuyo nombre es saludarUsuario. El parámetro que voy a declarar es 'nombre'. Dentro de la función creo una variable mensaje que va a contener
un string + el parámetro de mi función. Esta variable aparecerá en consola con mi console.log. Cierro la función, porque ya he definido lo que quiero que llevo a cabo.
Fuera de esta, aparecerá la variable mensaje que he creado para saludarUsuario tantas veces como yo quiera cada vez que mencione a la función. */

// - Ejercicio 02 - //

//El 10% de un número es el 0,1 de ese número.

// Sacara el 10% de 100 es 90. Cómo enfrento esto en una función? Este es un ejemplo, pero yo quiero que número = x


function porcentaje(num1) {
    let cuenta = num1 * 0.1;
    let resultado = /* num1 */ - cuenta;
    console.log(resultado);
}

porcentaje(100);
porcentaje(478);
porcentaje(7);


// - Ejercicio 03 - //

function areaTriangulo (base, altura) {
    let resultado = base*altura/2;
    console.log(resultado); 
}

areaTriangulo(10, 7);
areaTriangulo(20, 5);

// No puede ser tan fácil... 
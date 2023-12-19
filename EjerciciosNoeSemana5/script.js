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

saludarUsuario('Sofi')

/*  He creado una función cuyo nombre es saludarUsuario. El parámetro que voy a declarar es 'nombre'. Dentro de la función creo una variable mensaje que va a contener
un string + el parámetro de mi función. Esta variable aparecerá en consola con mi console.log. Cierro la función, porque ya he definido lo que quiero que llevo a cabo.
Fuera de esta, aparecerá la variable mensaje que he creado para saludarUsuario tantas veces como yo quiera cada vez que mencione a la función. */
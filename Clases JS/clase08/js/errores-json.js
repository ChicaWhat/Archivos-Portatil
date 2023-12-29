'use strict'

// OBJETO ERROR

// 1er mensaje de error
const miError = new Error("Se ha producido un error");
console.log(miError.message);

// 2do mensaje de error

try {
    suma();
} 

catch (error) {
    console.log(error);
}

finally{
    console.log("Ha finalizado el proceso de ejecución");
}

// 3er mensaje de error
const dividir = (a, b) => {

    if(b === 0){
        throw new Error("No se puede dividir un número por cero. Volve a intentar!");
    }

    return a / b;

}

// console.log(dividir(10, 0));

try {
    console.log(dividir(20, 0));
} 

catch (error) {
    console.error(error.message);
}


/* OBJETO JSON --> se utiliza para transmitir datos entre aplicaciones y servidores. Entonces tenemos del lado del servidor un objeto JSON que vamos a consumir desde el lado del frontend. Cuando consumimos el JSON lo que se hace es transformarlo a objeto literal para que luego se pueda mostrar en el documento HTML. 

JSON = JavaScript Object Notation 

    - es un formato de texto simple para intercambiar información
    - es bastante ligero y fácil de leer por los humanos
    - Deriva de JS pero es independientemente del lenguaje de programación
    - Siempre la información se guarda en la estructura de pares de clave-valor

*/


// Creando un objeto literal de js

const persona = {
    nombre: "Susana", 
    apellido: "Herrera", 
    edad: 56,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Barcelona",
        pais: "España"
    }
};

console.log(persona);

// Transformar de objeto literal a objeto JSON
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

// Transformar de JSON a objeto literal
const personaJS = JSON.parse(personaJSON);
console.log(personaJS);
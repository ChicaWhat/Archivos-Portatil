"use strict";

/* function validateDNI(dni) {
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

try{

  console.log(`Analizo ${dni} ...`);

  // compruebo que sea un string de 10 caracteres
  if (typeof dni !== "string" || dni.length !== 10) {
    throw new Error("ERROR: el DNI tiene que ser una cadena de texto de 10 caracteres (guión incluido)");
  }

  // separo el DNI por el guión
  const dniArray = dni.split("-"); // ["00000000", "T"]

  // compruebo que tenga uno y un sólo "-"
  if (dniArray.length !== 2) {
    throw new Error("ERROR: el DNI tiene que llevar uno y un sólo '-'");
  }

  const [numeros, letra] = dniArray;

  // compruebo que la primera parte sea un número de 8 cifras
  if (numeros.length !== 8 || isNaN(numeros)) {
    throw new Error("ERROR: la primera parte del DNI tiene que ser compuesta por 8 números");
  }

  // compruebo que el último carácter sea una letra
  if (!isNaN(parseInt(letra))) {
    throw new Error("ERROR: el último carácter del DNI tiene que ser una letra");
  }

  // compruebo que la letra sea valida
  if (letra.toUpperCase() !== letras[numeros % 23]) {
    throw new Error("ERROR: la letra del DNI no es valida");
  }

  // DNI es valido
  console.log(`DNI valido`);

  
} catch (error) {

     console.error(error.message);
  }

}
// dni valido
validateDNI("00000000-T");
validateDNI("79119919-B");



// descomentar y comprobar los errores
validateDNI("00000000-TT");
validateDNI("00000000TT");
validateDNI("00000A00-T");
validateDNI("00000000-9");
validateDNI("00000000-A"); */


// TODO || Realizo un throw new Error en todos los condicionales, creando el mensaje de error que quiero se se muestre en consola en caso de no cumplirse las condiciones establecidas para validar un DNI.

// TODO || Creo el try and catch aquí. El try es el que me va a analizar la función para saber si se comete algún error en ella.
// TODO || El catch, término que tiene relación directa con el throw new Error, es el que va a lanzar el mensaje de error, en caso de haberlo.


function validateDNI(dni) {
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  console.log(`Analizo ${dni} ...`);

  // compruebo que sea un string de 10 caracteres
  try {
    if (typeof dni !== "string" || dni.length !== 10) {
      throw new Error("el DNI tiene que ser una cadena de texto de 10 caracteres (guión incluido)");
    }


  // separo el DNI por el guión
  const dniArray = dni.split("-"); // ["00000000", "T"]

  // compruebo que tenga uno y un sólo "-"
    if (dniArray.length !== 2) {
      throw new Error("el DNI tiene que llevar uno y un sólo '-'");

    }


  const [numeros, letra] = dniArray;

  // compruebo que la primera parte sea un número de 8 cifras

    if (numeros.length !== 8 || isNaN(numeros)) {
      throw new Error("la primera parte del DNI tiene que ser compuesta por 8 números");
    }


  // compruebo que el último carácter sea una letra

    if (!isNaN(parseInt(letra))) {
      throw new Error("el último carácter del DNI tiene que ser una letra");
    }


  // compruebo que la letra sea valida
    if (letra.toUpperCase() !== letras[numeros % 23]) {
      throw new Error("la letra del DNI no es valida");

    
    }

  } catch (error) {

    console.error(error);
    
    return;
  }

  // DNI es valido
  console.log(`DNI valido`);
}

// dni valido
validateDNI("00000000-T");

// descomentar y comprobar los errores
validateDNI("00000000-TT");
validateDNI("00000000TT");
validateDNI("00000A00-T");
validateDNI("00000000-9");
validateDNI("00000000-A");

'use strict';

const people = [
  {
    name: "Maria",
    age: 20,
  },
  {
    name: "Ana",
    age: 14,
  },
  {
    name: "Luis",
    age: 16,
  },
  {
    name: "Pepe",
    age: 35,
  },
  {
    name: "Manuel",
    age: 50,
  },
  {
    name: "Teresa",
    age: 12,
  },
  {
    name: "Daniel",
    age: 27,
  },
  {
    name: "Irene",
    age: 23,
  },
  {
    name: "Alex",
    age: 10,
  },

];

console.log(people);

// Escribe aquí tu código


/* function imprimir (name, age) {

    if ( age >= 18 ){
      console.log(`${name} es mayor de edad`);
    }
    else {
      console.log(`${name} es menor de edad`);
    }

}

// El bucle que recorre el array people

for ( let persona of people){
  imprimir(persona.name, persona.age);
} */



const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// Escribe aquí tu código


/*  Edita el archivo index.js para crear una función que reciba un Array como parámetro y retorne otro Array con los contenidos del Array inicial pero eliminando los duplicados.

Ejecuta esa función pasándole como parámetro el Array names e imprime en la consola el resultado.

Debería imprimir esto: */


function quitarDuplicados (array){

  const lista = new Set(array);
  // console.log(lista);

  const arrayLista = Array.from(lista);

  return arrayLista;
}

console.log(quitarDuplicados(names));























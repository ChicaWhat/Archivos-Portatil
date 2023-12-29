'use strict';

// - Ejercicio 1 - //

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

/* console.log(people);

// Escribe aquí tu código


 function imprimir (name, age) {

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
}  */

// - Ejercicio 2 - //

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
  console.log(lista);

    const arrayLista = Array.from(lista);
    console.log(names);

  return arrayLista; 
} 

console.log(quitarDuplicados(names));



// - Ejercicio 3 - //

  const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];


/* function combine(pizzas) {
    const combinations = [];

    // Escribe aquí tu código


    for (let i = 0; i < pizzas.length; i++){

      for (let x = i + 1; x < pizzas.length; x++){
        
        if( pizzas[i] != pizzas[x]){
          const combination = `${pizzas[i]} y ${pizzas[x]}`;
          combinations.push(combination);
        }
      }
    }

    return combinations;
}

console.log(combine(pizzas)); */

// - Ejercicio 4 - //

const rickandmortyCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    url: "https://rickandmortyapi.com/api/character/3",
    created: "2017-11-04T19:09:56.428Z",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    url: "https://rickandmortyapi.com/api/character/4",
    created: "2017-11-04T19:22:43.665Z",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    url: "https://rickandmortyapi.com/api/character/5",
    created: "2017-11-04T19:26:56.301Z",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    gender: "Female",
    origin: {
      name: "Abadango",
      url: "https://rickandmortyapi.com/api/location/2",
    },
    location: {
      name: "Abadango",
      url: "https://rickandmortyapi.com/api/location/2",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    url: "https://rickandmortyapi.com/api/character/6",
    created: "2017-11-04T19:50:28.250Z",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Testicle Monster Dimension",
      url: "https://rickandmortyapi.com/api/location/21",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    url: "https://rickandmortyapi.com/api/character/7",
    created: "2017-11-04T19:59:20.523Z",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    url: "https://rickandmortyapi.com/api/character/8",
    created: "2017-11-04T20:03:34.737Z",
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    url: "https://rickandmortyapi.com/api/character/9",
    created: "2017-11-04T20:06:54.976Z",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Worldender's lair",
      url: "https://rickandmortyapi.com/api/location/4",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    url: "https://rickandmortyapi.com/api/character/10",
    created: "2017-11-04T20:19:09.017Z",
  },
];

console.log(rickandmortyCharacters);

// *rickandmortyCharacters

// Escribe aquí tu código

// *Voy a crear un nuevo array con las propiedades name, status, species y gender

const nuevoArrayRickandMorty = rickandmortyCharacters.map( (rickandmortyCharacter) => {
  return {
    name: rickandmortyCharacter.name,
    status: rickandmortyCharacter.status,
    species: rickandmortyCharacter.species,
    gender: rickandmortyCharacter.gender
  }
});

console.log(nuevoArrayRickandMorty);

const AliveRickandMorty = nuevoArrayRickandMorty.filter( nuevoArrayRM => nuevoArrayRM.status === 'Alive' );

console.log(AliveRickandMorty);























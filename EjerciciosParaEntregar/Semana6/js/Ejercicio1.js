'use strict'


// puntuaciones primera ronda

const firstRound = [
    { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
    { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
    { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
    { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
    { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
    { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
    { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
    { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
  ];
  
  // Escribe aquí tu código

  // Consigo crear un array con el valor de cada scores
const recorrerScores = firstRound.map( punto => punto.scores )
    //console.log(recorrerScores);

  // Creo un bucle de dichos arrays y con el método reduce, itero entre cada uno de sus elementos a través del acumulador consiguiendo la suma total de cada índice. Vuelvo a crear un nuevo array ahora con las sumas totales de cada una de las puntuaciones
const arraySumaPuntos = [];

    for ( let puntos of recorrerScores){

        const sumaPuntos = puntos.reduce((puntos, acumulador) => puntos + acumulador )
        //console.log(sumaPuntos);

        arraySumaPuntos.push(sumaPuntos);
}
    //console.log(arraySumaPuntos);



// Creo una función donde ordeno de mayor a menor la puntuación y con el método find() selecciono la primera y la última puntuación para poder imprimir en consola cual es el mejor y el peor equipo con sus respectivos scores.

function mejorYPeorEquipo (){

    arraySumaPuntos.sort((a, b) => {
        return b + a;
    })
        console.log(arraySumaPuntos)


        const mayorPuntuacion = arraySumaPuntos.find(elemento => {
            return elemento;
        })
            console.log(`El mejor equipo es ${firstRound[0].team} con un total de ${mayorPuntuacion} puntos`);

        const menorPuntuacion = arraySumaPuntos.find(x => {
            return x === 10;
        })
            console.log(`El peor equipo es ${firstRound[5].team} con un total de ${menorPuntuacion} puntos`);
}

mejorYPeorEquipo();
  



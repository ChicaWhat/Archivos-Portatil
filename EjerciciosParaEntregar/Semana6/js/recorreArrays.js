'use strict'

const firstRound = [
    { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
    { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
    { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
    { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
    { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
    { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
    { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
    { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
]

const arraySumarPuntos = [];

for ( const primerRound of firstRound ){

    const sumarPuntos = primerRound.scores.reduce((puntos, acumulador) => puntos + acumulador)
    
    arraySumarPuntos.push(sumarPuntos);
}

// console.log(arraySumarPuntos);

const equipos = firstRound.map( equipo => equipo.team )
console.log(equipos);

const mejorYPeorEquipo = ((puntuacion, equipo) => {

    arraySumarPuntos.sort((a, b) => {
        return b - a;
    })
        console.log(arraySumarPuntos)

    puntuacion = arraySumarPuntos.find((puntos, index) => {
            console.log(`Índice ${index}: ${puntos}`)
        return puntos;
    })
    console.log(`Este es la mayor puntuación de todos los equipos: ${puntuacion}`)

    


})

mejorYPeorEquipo();
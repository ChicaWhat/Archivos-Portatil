"use strict";

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

// SOLUCIÓN CON MAP, REDUCE Y SORT

const firstRoundWithTotalScores = firstRound.map((data) => {
  const totalScores = data.scores.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return { team: data.team, scores: totalScores };
});

firstRoundWithTotalScores.sort((a, b) => {
  // -1 o menos: A va antes que B
  // 1 o más: B va antes que A
  // 0: Los deja como están

  // if (a.scores < b.scores) {
  //   return -1;
  // }

  // if (b.scores < a.scores) {
  //   return 1;
  // }

  // return 0;

  return a.scores - b.scores;
});

const bestTeam =
  firstRoundWithTotalScores[firstRoundWithTotalScores.length - 1];
const worstTeam = firstRoundWithTotalScores[0];

console.log(
  `El mejor equipo es ${bestTeam.team} con un total de ${bestTeam.scores} puntos`
);

console.log(
  `El peor equipo es ${worstTeam.team} con un total de ${worstTeam.scores} puntos`
);

// SOLUCION SIN MAP Y SORT

// let worstTeam = { team: "", score: Infinity };
// let bestTeam = { team: "", score: -Infinity };

// for (const data of firstRound) {
//   const totalScore = data.scores.reduce((acc, num) => {
//     return acc + num;
//   }, 0);

//   if (totalScore < worstTeam.score) {
//     worstTeam = { team: data.team, score: totalScore };
//   }

//   if (totalScore > bestTeam.score) {
//     bestTeam = { team: data.team, score: totalScore };
//   }
// }

// console.log(
//   `El mejor equipo es ${bestTeam.team} con un total de ${bestTeam.score} puntos`
// );

// console.log(
//   `El peor equipo es ${worstTeam.team} con un total de ${worstTeam.score} puntos`
// );

// Ejemplo .sort() ordenar users dependiendo de si son premium o no

// const users = [
//   { name: "pepe", isPremium: false },
//   { name: "maria", isPremium: true },
//   { name: "lucas", isPremium: false },
// ];

// users.sort((a, b) => {
//   if (a.isPremium && !b.isPremium) {
//     return 1;
//   }

//   if (b.isPremium && !a.isPremium) {
//     return -1;
//   }

//   return 0;
// });

// console.log(users);

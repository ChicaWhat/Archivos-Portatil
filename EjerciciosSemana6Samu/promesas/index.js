"use strict";

function myFuncion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 10);
      if (random >= 5) {
        resolve(`Todo bien: ${random}`);
      } else {
        reject(`Tenemos un problema: ${random}`);
      }
    }, 2000);
  });
}

// THEN / CATCH

myFuncion()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("¡Prueba completada!");
  });

// ASYNC / AWAIT

const main = async () => {
  try {
    const resultado = await myFuncion();

    console.log(resultado);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("¡Prueba completada!");
  }
};

main();

// REPASO PROMESAS

// Función sumar ficticia que simula que las sumas son un proceso pesado y ejecutado por algo ajeno a JS
// Recibe dos parámetros y retorna una promesa que resuelve con la suma de dichos valores

const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 0);
  });
};

// THEN / CATCH

sumar(2, 5)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Proceso finalizado");
  });

// ASYNC / AWAIT

const f1 = async () => {
  try {
    const resultado = await sumar(2, 5);

    console.log(resultado);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Proceso finalizado");
  }
};

f1();

// EJEMPLO CALLBACK HELL CON THEN / CATCH

// sumar(3, 4).then((resultado) => {
//   sumar(resultado, 8).then((resultado2) => {
//     sumar(resultado2, 10).then((resultado3) => {
//       sumar(resultado3, 3).then((resultado4) => {
//         sumar(resultado4, 2).then((resultadoFinal) => {
//           console.log(resultadoFinal);
//         });
//       });
//     });
//   });
// });

// Con ASYNC/AWAIT no sucede el CALLBACK HELL...

// const operar = async () => {
//   const resultado = await sumar(3, 4);
//   const resultado2 = await sumar(resultado, 8);
//   const resultado3 = await sumar(resultado2, 10);
//   const resultado4 = await sumar(resultado3, 3);
//   const resultadoFinal = await sumar(resultado4, 2);

//   console.log(resultadoFinal);
// };

// operar();

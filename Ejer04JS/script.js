'use strict'

/* Crear loop de 24h, 0:00 a 23:00h.
 horario=<8 && horario>22 informa solo de "Son las 3:00"
 horario>8 && horario<=22 informa de "Son las 17:00, CUCÚ!" */



/* - Esta forma de hacerlo hace que lo tenga CASI CASI, pero del 8 al 22 con la frase CUCÚ está colocado al principio en vez de en su sitio. ¿Qué hace que ocurra algo así? - */


let horaCucu = 8

 for(let horasDia = 0; horasDia < 24; horasDia++){
     if(horasDia>7 && horasDia<23){
        continue;
    }
     console.log(`Son las ${horasDia}:00`);


        while(horaCucu<=22){
        console.log(`Son las ${horaCucu}:00, CUCÚ!`);
        horaCucu++;
    }
}


/* - Con esta forma el bucle que creo es que, por cara hora generada en el while, se introduce en medio del 8 al 22 la oración 'Son las X, CUCÚ!' - */

// let horasDia = 0;
// let horasCucu = 8;

// while(horasDia<24){
//     console.log(`Son las ${horasDia}:00`);
//     horasDia++;
// }   

//     for(let horasCucu = 8; horasCucu < 23; horasCucu++){
//         console.log(`Son las ${horasCucu}:00, CUCÚ!`);
// }

/* - Otra de las dos formas más que he descifrado para intentar encontrar la solución a este ejercicio. - /*

/* let horaCucu = 8

for(let horasDia = 0; horasDia < 24; horasDia++){
   while(horaCucu<=22){
       console.log(`Son las ${horaCucu}, CUCÚ!`);
       horaCucu++;
   }
       if(horasDia>7 && horasDia<23){
           continue;
       }
   console.log(`Son las ${horasDia}:00`);
}
*/


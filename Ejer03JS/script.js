'use strict'

let nombre = "Marta";
let edad = 27;


if (edad<12){
    console.log(`${nombre} tendrá descuento infantil.`);
}
else if (edad>=12 && edad<30){
    console.log(`A ${nombre} le corresponde el descuento juvenil.`);
}
else if (edad>=60){
    console.log(`${nombre} tendrá el descuento de jubilados.`);
}
else {
    console.log(`${nombre} no tendrá acceso a ningún descuento.`);
}


// Si la edad es menor que 12 años, podrá acceder al descuento infantil; en cambio, si la edad es mayor que 12 y menor que 30, tendrá acceso al descuento juvenil; sino, si la edad es mayor de 60 años tendrá el descuento de jubilados. Si nada de esto se cumple, a Marta no le corresponde ningún descuento.
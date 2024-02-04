/* import { sum, rest, mult, div } from './script.js';

console.log(`Suma: ${sum(5, 5)}`);
console.log(`Resta: ${rest(10, 5)}`);
console.log(`Multiplicar: ${mult(5, 5)}`);
console.log(`Dividir: ${div(140, 2)}`);
*/

import data from './script.js';

console.log(data);
data.sayHello();

console.log(data.name);
console.log(data.age);
console.log(data.sayHello()); 

// process.argv me muestra un array 
console.log(process.argv);

// console.log(process.cwd()); Ruta Absoluta Del Directorio
// const dirname = process.cwd();
// console.log(dirname);

console.log(process.argv[3]);

/* const args = process.argv;
const sayHi = args[2];
console.log(`Dime 'Hola' en inglés: ${sayHi}`); */

import path from 'path';
// console.log(path.join(process.cwd(), 'images/picture.png'));



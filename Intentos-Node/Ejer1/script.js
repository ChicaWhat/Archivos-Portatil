/* console.log('Hola desde Node');

import chalk from 'chalk';

console.log(chalk.bgBlue('Hello world'));

console.error(chalk.red('Error!'));

console.log(chalk.blue('Hello') + chalk.green(' World') + chalk.red('!'));

console.log(chalk.red('ERROR FATALITY:') + chalk.bold(' Estamos probando') + chalk.bgRed.bold(' sin ningún compromiso') + chalk.blue.underline.bold(' ,pana'));

console.log(chalk.bgRed('Esto') + chalk.blue(' está') + chalk.bgBlue.bold(' muy') + chalk.green(' GUAPO!')); */

//! ESTO SOLO SIRVE PARA COMMONJS
// Ruta absoluta del directorio que contiene el archivo en ejecución
/* console.log(__dirname); */
// Ruta absoluta del archivo en ejecución
/* console.log(__filename); */
//!

// Módulo ES6 -- usa 'import' y 'export'

const sum = (a, b) => a + b;
const rest = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

export {
    sum,
    rest,
    mult,
    div
};

const data = {
    name: 'Juana de Arco',
    age: 156,
    sayHello() {
        console.log(`Hola, mi nombre es ${this.name}`)
    }
};

export default data;

// TODO // Estos son los comandos para ES6
// Ruta absoluta del directorio que contiene el archivo en ejecución
// console.log(process.cwd());
// Nombre del archivo en ejecución
/* console.log(path.basename(process.argv[1])); */

// console.log(process.env.PATH);



// Para habilitar el uso de módulos ES6 en Node.js se crea un archivos package.json y en la consola se escribe 'npm init -y' y se escribe "type": "module" al principio de este

/* function makeUser() {
    return {
        name: 'Jhon',
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); */

// Esto me devuelve un undefined en name, debido a que this en este caso es llamado como una función, no como un método con sintaxis de punto
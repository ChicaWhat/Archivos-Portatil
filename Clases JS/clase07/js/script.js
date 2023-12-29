'use strict'
// OBJETOS 

// 1er objeto usuario
const usuario = {
    nombre: "María",
    apellido: "Ramirez", 
    edad: 60,
    email: "maria@gmail.com",
    cualidades: ["alegre", "atenta", "responsable", "simpatica"],
    online: true,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

}

console.log(usuario); // Ejecutamos el objeto completo
usuario.saludar(); // Ejecutando el método saludar
console.log(usuario.edad); // Dot Notation 
console.log(usuario["edad"]); // Bracket Notation
usuario.edad = 61;
console.log(usuario.edad);
usuario.ciudad = "Barcelona"; // Agregar una clave y valor al objeto
console.log(usuario);
delete usuario.email; // Eliminamos una clave
delete usuario.cualidades[1];
console.log(usuario);

// 2do objeto: coche

const coche = {
    marca: "Toyota", 
    modelo: "Yaris", 
    anio: 2022,
    color: "gris"
}

// Mostrar las claves del objeto en formato array
console.log(Object.keys(coche)); 

// Mostrar los valores del objeto en formato array
console.log(Object.values(coche)); 

// Mostrar un array de arrays
console.log(Object.entries(coche));

// RECORRER UN OBJETO (ITERAR) --> usamos un bucle llamado for in

for(const clave in coche ){
    console.log(clave + ": " + coche[clave]);
}

// OBJECT CREATE 
// Objeto prototipo

const animal = {
    saludar: function(){
        console.log("Hola, soy un animal");
    }
}

const perro = Object.create(animal);
perro.saludar();

const gato = Object.create(animal);
gato.saludar();

// DESTRUCTURING DE OBJETOS -->extraer valores de las claves y guardarlos en variables
const producto = {
    nombre: "iPad",
    precio: 1200,
    stock: 10 
};

// const { nombre, precio, stock } = producto;

const { nombre: nombreProducto, precio: precioProducto, stock: stockProducto } = producto;

console.log(nombreProducto);
console.log(precioProducto);
console.log(stockProducto);

// SPREAD OPERATOR 
// Crear una copia del objeto "producto"

const copiaProducto = { ...producto };
console.log(copiaProducto);

copiaProducto.precio = 900;
console.log(copiaProducto); // 900
console.log(producto); // 1200
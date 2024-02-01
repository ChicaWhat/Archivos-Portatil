// cada vez que necesite acceder a mi base de datos para recuperar, insertar, actualizar, borrar, etc
// me tengo que traer mi conexión, es decir, a getPool

import getPool from './getPool.js';

const getAllOdontologos = async () => {

    try {
        
        const pool = await getPool();

        // consulta
        const result = await pool.query('SELECT * FROM odontologos');

        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

await getAllOdontologos();
// esto sirve para cortar el proceso para que me devuelva la posibilidad de seguir ejecutando en la consola
process.exit(0);

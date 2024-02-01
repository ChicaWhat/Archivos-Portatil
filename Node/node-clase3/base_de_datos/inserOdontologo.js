import getPool from "./getPool.js";

const inserOdontologo = async () => {
    try {
        
        const pool = await getPool();

        await pool.query(
            `
            INSERT INTO odontologos (id_odontologo, nombre, apellido, direccion, telefono)
            VALUES (?,?,?,?,?)
            `
            ,
            [5555, 'Prueba', 'Apellido', 'Direccion1', '666777888']

        );

        console.log('Dato agregado correctamente');


    } catch (error) {
        console.log(error);
    }

}

await inserOdontologo();
process.exit(0);
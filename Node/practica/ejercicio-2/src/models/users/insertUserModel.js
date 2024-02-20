// Importamos las dependencias.
import bcrypt from 'bcrypt';

// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Importamos los errores.
import {
    userAlreadyRegisteredError,
    emailAlreadyRegisteredError,
} from '../../services/errorService.js';

// Función que realiza una consulta a la base de datos para crear un nuevo usuario.
const insertUserModel = async (username, email, password) => {
    // 1. Obtenemos un pool de conexiones...
    const pool = await getPool();

    // 2. Buscamos en la base de datos algún usuario con ese nombre...
    let [users] = await pool.query(`SELECT id FROM users WHERE username = ?`, [
        username,
    ]);

    // 3. Si existe algún usuario con ese nombre lanzamos un error...
    if (users.length > 0) {
        userAlreadyRegisteredError();
    }

    // 4. Buscamos en la base de datos algún usuario con ese email...
    [users] = await pool.query(`SELECT id FROM users WHERE email = ?`, [
        email
    ]);

    // 5. Si existe algún usuario con ese email lanzamos un error...
    if (users.length > 0) {
        emailAlreadyRegisteredError();
    }

    // 6. Encriptamos la contraseña...
    const hashedPass = await bcrypt.hash(password, 10);

    // 7. Insertamos el usuario...
    await pool.query(
        `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
        [username, email, hashedPass],
    );
};

export default insertUserModel;

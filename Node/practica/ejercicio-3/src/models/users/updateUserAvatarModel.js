// Importamos getPool
import getPool from '../../db/initDb.js';

// Función que realiza una consulta a la base de datos para actualizar el avatar de un usuario
const updateUserAvatarModel = async (avatarName, userId) => {
    const pool = await getPool();

    // Actualizamos el avatar del usuario
    await pool.query(`UPDATE users SET avatar = ? WHERE id = ?`, [
        avatarName, 
        userId,
    ]);
};

export default updateUserAvatarModel;
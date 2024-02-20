// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
    newUserController,
    loginUserController,
} from '../controllers/users/index.js';
import authUserController from '../middlewares/authUserController.js';
import editUserAvatarController from '../controllers/users/editUserAvatarController.js';

// Creamos un router.
const router = express.Router();

// Middleware de creación de usuario.
router.post('/users/register', newUserController);

// Middleware de login de usuario...
router.post('/users/login', loginUserController);

// Middleware que permite cambiar el avatar de un usuario
router.put('/users/avatar', authUserController, editUserAvatarController);

export default router;

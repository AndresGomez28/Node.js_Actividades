const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosrController');

const auth = require('../middelware/auth');


// router.get('/api/v1/usuarios', auth.authenticate(), usuariosController.obtenerUsuarios);
router.get('/api/v1/usuarios', usuariosController.obtenerUsuarios);
router.get('/api/v1/usuarios/id/:id', usuariosController.usuarioPorId);
router.get('/api/v1/usuarios/nombres/:nombre', usuariosController.usuarioPorNombre);
router.post('/api/v1/usuarios', usuariosController.crearUsuario);
router.patch('/api/v1/usuarios/actualizar/:nombre', usuariosController.actualizarUsuario);
router.delete('/api/v1/usuarios/eliminar/:usuarioid', usuariosController.eliminarUsuario);
router.post('/api/v1/usuarios/registro', usuariosController.registro);
router.post('/api/v1/usuarios/login', usuariosController.login);


module.exports = router;

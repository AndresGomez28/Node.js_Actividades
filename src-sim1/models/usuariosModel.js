const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
    usuarioid: Number,
    nombre: String,
    apellido: String,
    correo: String,
    password: String
});

const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;
const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
    usuarioid: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;
const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
    nombre: String,
    especialidad: String,
    correo: String
});

const Profesores = mongoose.model('profesores', profesorSchema);

module.exports = Profesores;
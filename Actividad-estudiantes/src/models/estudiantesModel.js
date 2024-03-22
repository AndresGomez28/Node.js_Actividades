const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    estudianteid: Number,
    nombre: String,
    edad: Number,
    correo: String,
    profesorid: Number
});

const Estudiantes = mongoose.model('estudiantes', estudianteSchema);

module.exports = Estudiantes;
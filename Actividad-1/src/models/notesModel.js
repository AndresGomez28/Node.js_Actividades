const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
    estudiante: String,
    nota: Number
});

const Nota = mongoose.model('notas', notaSchema);

module.exports = Nota;
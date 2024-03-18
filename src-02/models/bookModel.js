const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    nombre: String,
    genero: String,
});

const Libros = mongoose.model('libros', bookSchema);

module.exports = Libros;
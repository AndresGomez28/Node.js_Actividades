const Libros = require('../models/bookModel');

// Controlador Ppal
const bookController = {
    // Crear un nuevo libro
    createBook: async (req, res) => {
        const bookrData = req.body;
        console.log(bookrData);
        try {
            const newBook = new Libros(userData);
            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener lista de todos los libros
    getAllBooks: async (req, res) => {
        try {
            const libros = await Libros.find();
            res.json(libros);
        } catch (error) {
            console.error('Error al obtener libros:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener un libro por su Id
    getBookById: async (req, res) => {
        const id = req.params.id;
        try {
            const libroId = await Libros.findById(id)
            res.json(libroId);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Actualizar el nombre de un libro
    updateBook: async (req, res) => {
        try {
            const {nombre} =req.params;
            const bookUpdate = await Libros.findOneAndUpdate({nombre: nombre}, {$set: {nombre:'Libro_test'}});
            res.json(bookUpdate)
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Eliminar un libro por su nombre
    deleteBook: async (req, res) => {
        try {
            const {nombre} = req.params;
            const deletedBook = await Libros.findOneAndDelete({nombre: nombre});
            res.json(deletedBook);
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

};

module.exports = bookController;

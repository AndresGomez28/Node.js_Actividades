const Libros = require("../models/bookModel");

// Controlador Ppal
const bookController = {
  // Crear un nuevo libro
  createBook: async (req, res) => {
    const bookData = req.body;
    console.log(bookData);
    try {
      const newBook = new Libros(bookData);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      console.error("Error al crear el Libro:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Obtener lista de todos los libros
  getAllBooks: async (req, res) => {
    try {
      const libros = await Libros.find();
      res.json(libros);
    } catch (error) {
      console.error("Error al obtener los Libros:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Obtener un libro por su Id
  getBookByReference: async (req, res) => {
    const {referencia} = req.params;
    try {
      const libroReference = await Libros.findOne({ referencia: referencia });
      res.json(libroReference);
    } catch (error) {
      console.error("Error al buscar la Referencia del Libro:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Actualizar el nombre de un libro
    updateBook: async (req, res) => {
      const { referencia } = req.params;
    try {
      const bookUpdate = await Libros.findOneAndUpdate({ referencia: referencia },{ $set: { nombre: "Nombre del Libro Cambiado" } });
      res.json(bookUpdate);
    } catch (error) {
      console.error("Error al actualizar el Libro:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Eliminar un libro por su nombre
    deleteBook: async (req, res) => {
      const {referencia} = req.params;
    try {
      const deletedBook = await Libros.findOneAndDelete({ referencia: referencia });
      res.json(deletedBook);
    } catch (error) {
      console.error("Error al eliminar el Libro:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = bookController;

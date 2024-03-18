const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


//1 crear libro
router.post('/api/v1/libros', bookController.createBook);

//2 obtener lista de libros
router.get('/api/v1/libros', bookController.getAllBooks);

//3 consultar libro por Id
router.get('/api/v1/libros/id/:id', bookController.getBookById);

//4 actualizar nombre de libro
router.patch('/api/v1/libros/nombre/:nombre', bookController.updateBook);

//5 borrar un libro por su nombre
router.delete('/api/v1/libros/delete/:nombre', bookController.deleteBook);


module.exports = router;

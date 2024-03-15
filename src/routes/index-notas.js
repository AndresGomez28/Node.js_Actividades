const express = require('express');
const router = express.Router();
const notaController = require('../controllers/noteController');


router.get('/api/v1/notas', notaController.getAllNotes);
router.get('/api/v1/notas/id/:id', notaController.getNotaById);


module.exports = router;
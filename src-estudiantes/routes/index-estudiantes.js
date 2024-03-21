const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');



router.get('/api/v1/estudiantes', estudiantesController.getAllStudents);
router.get('/api/v1/estudiantes/id/:id', estudiantesController.getStudentsById);
router.get('/api/v1/estudiantes/nombre/:nombre', estudiantesController.getUserByName);
router.post('/api/v1/estudiantes', estudiantesController.createUser);
router.patch('/api/v1/estudiantes/update/:nombre', estudiantesController.updateUser);
router.delete('/api/v1/estudiantes/delete/:nombre', estudiantesController.deleteUser);


module.exports = router;

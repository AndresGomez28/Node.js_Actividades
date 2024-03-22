const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');


router.get('/api/v1/estudiantes', estudiantesController.getAllStudents);
router.get('/api/v1/estudiantes/id/:id', estudiantesController.getStudentsById);
router.get('/api/v1/estudiantes/nombre/:nombre', estudiantesController.getStudentByName);
router.post("/api/v1/estudiantes", estudiantesController.createStudent);
router.patch('/api/v1/estudiantes/update/:nombre', estudiantesController.updateStudent);
router.delete('/api/v1/estudiantes/delete/:nombre', estudiantesController.deleteStudent);

module.exports = router;

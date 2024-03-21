const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');


router.get('/api/v1/profesores', profesoresController.getAllTeachers);
router.get('/api/v1/profesores/id/:id', profesoresController.getTeacherById);
router.get('/api/v1/profesores/nombre/:nombre', profesoresController.getTeacherByName);
router.post('/api/v1/profesores', profesoresController.createTeacher);
router.patch('/api/v1/profesores/update/:nombre', profesoresController.updateTeacher);
router.delete('/api/v1/profesores/delete/:nombre', profesoresController.deleteTeacher);



module.exports = router;
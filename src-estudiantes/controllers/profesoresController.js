const Profesores = require('../models/userModel');

const profesoresController = {
    // Obtener todos los usuarios
    getAllTeachers: async (req, res) => {
        try {
            const profesores = await Profesores.find();
            res.json(profesores);
        } catch (error) {
            console.error('Error al obtener profesores:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getTeacherById: async (req, res) => {
        const id = req.params.id;
        try {
            const profesorId = await Profesores.findById(id)
            res.json(profesorId);
        } catch (error) {
            console.error('Error al obtener profesor:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getTeacherByName: async (req, res) => {
        const {nombre} = req.params;
        try {
            const nombreProfesor = await Profesores.findOne({nombre: nombre})
            res.json(nombreProfesor);
        } catch{
            console.error('Error al obtener profesor:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },


    // Crear un nuevo usuario
    createTeacher: async (req, res) => {
        const dataProfesor = req.body;
        console.log(dataProfesor);
        try {
            const nuevoProfesor = new Profesores(dataProfesor);
            const profesorGuardado = await nuevoProfesor.save();
            res.status(201).json(profesorGuardado);
        } catch (error) {
            console.error('Error al crear proferos:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },


    // Otros métodos para manejar otras solicitudes relacionadas con los usuarios (actualizar, eliminar, etc.)

    // Actualizar un usuario existente
    updateTeacher: async (req, res) => {
        try {
            // const {profesorid} = req.params;
            // const actualizarProfesor = await Profesores.findByIdAndUpdate({proferorid: proferorid}, {$set: {nombres: 'Un Nombre Random}});
            const {nombre} =req.params;
            const actualizarProfesor = await Profesores.findOneAndUpdate({nombre: nombre}, {$set: {nombre:'Julian'}});
            res.json(actualizarProfesor)
        } catch (error) {
            console.error('Error al actualizar profesor:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Eliminar un usuario existente
    deleteTeacher: async (req, res) => {
        try {
            // const {profesorid} = req.params;
            // const borrarProfesor = await Profesores.findOneAndDelete({profesorid: profesorid});
            const {nombre} = req.params;
            const borrarProfesor = await Profesores.findOneAndDelete({nombre: nombre});
            res.json(borrarProfesor);
        } catch (error) {
            console.error('Error al eliminar profesor:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = profesoresController;

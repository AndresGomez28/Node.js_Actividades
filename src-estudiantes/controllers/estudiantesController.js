const Estudiantes = require('../models/notesModel');

const estudiantesController = {
    //Obtener todas las notas
    getAllStudents: async (req, res) => {
        try {
            const estudiantes = await Estudiantes.find();
            res.json(estudiantes);
        } catch (err) {
            console.error('Error al obtener notas:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    //Consulta de notas por ID
    getStudentsById: async (req, res) => {
        const id = req.params.id;
        try {
            const estudianteId = await Estudiantes.findById(id);
            res.json(estudianteId);
        } catch (err) {
            console.error('Error al obtener notas:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

module.exports = estudiantesController;

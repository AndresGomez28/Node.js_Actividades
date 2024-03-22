const Nota = require('../models/notesModel');

const notaController = {
    //Obtener todas las notas
    getAllNotes: async (req, res) => {
        try {
            const notas = await Nota.find();
            res.json(notas);
        } catch (err) {
            console.error('Error al obtener notas:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    //Consulta de notas por ID
    getNotaById: async (req, res) => {
        const id = req.params.id;
        try {
            const notaId = await Nota.findById(id);
            res.json(notaId);
        } catch (err) {
            console.error('Error al obtener notas:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

module.exports = notaController;

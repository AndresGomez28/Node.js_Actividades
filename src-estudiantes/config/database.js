const mongoose = require('mongoose');
let Estudiantes
let Profesores

const connectDatabaseEstudiantes = async () => {
    try {
        if (!Estudiantes) {
            Estudiantes = mongoose.model('Estudiantes', require('../models/userModel').schema);
        }

        await mongoose.connect('mongodb+srv://pipe2893:aXUEPTHj7VXOBLHr@cluster0.c5hjrub.mongodb.net/')
        .then(() => console.log('Conectado a MongoDB'))
        .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const connectDatabaseProfesores = async () => {
    try {
        if (!Profesores) {
            Profesores = mongoose.model('Profesores', require('../models/notesModel').schema);
        }

        await mongoose.connect('mongodb+srv://pipe2893:aXUEPTHj7VXOBLHr@cluster0.c5hjrub.mongodb.net/')
        .then(() => console.log('Conectado a MongoDB'))
        .catch((err) => console.log(err));

        await initializeData();

    }catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabaseEstudiantes;

module.exports = connectDatabaseProfesores;

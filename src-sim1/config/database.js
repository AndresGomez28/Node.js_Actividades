const mongoose = require('mongoose');
let Usuarios

const connectDatabase = async () => {
    try {
        if (!Usuarios) {
            Usuarios = mongoose.model('usuarios', require('../models/usuariosModel').schema);
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

const initializeData = async () => {
    try {
        console.log('Datos Iniciados Correctamente');
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;


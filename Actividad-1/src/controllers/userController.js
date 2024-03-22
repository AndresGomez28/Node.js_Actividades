const User = require('../models/userModel');

const userController = {
    // Obtener todos los usuarios
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getUserById: async (req, res) => {
        const id = req.params.id;
        try {
            const userId = await User.findById(id)
            res.json(userId);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getUserByName: async (req, res) => {
        const {nombre} = req.params;
        try {
            const nombreUsuario = await User.findOne({nombres: nombre})
            res.json(nombreUsuario);
        } catch{
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },


    // Crear un nuevo usuario
    createUser: async (req, res) => {
        const userData = req.body;
        console.log(userData);
        try {
            const newUser = new User(userData);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },


    // Otros métodos para manejar otras solicitudes relacionadas con los usuarios (actualizar, eliminar, etc.)

    // Actualizar un usuario existente
    updateUser: async (req, res) => {
        try {
            // const {_id} = req.params;
            const {nombre} =req.params;
            const userUpdate = await User.findOneAndUpdate({nombres: nombre}, {$set: {nombres:'Julian'}});
            // const userUpdate = await User.findByIdAndUpdate({id: _id}, {$set: {nombres:miNombre}});
            res.json(userUpdate)
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Eliminar un usuario existente
    deleteUser: async (req, res) => {
        try {
            const {nombre} = req.params;
            const deletedUser = await User.findOneAndDelete({nombres: nombre});
            res.json(deletedUser);
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = userController;

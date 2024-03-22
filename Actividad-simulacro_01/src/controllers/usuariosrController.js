const Usuarios = require('../models/usuariosModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = '##%dasdasd##';

const usuarioController = {
    // Obtener todos los usuarios
    obtenerUsuarios: async (req, res) => {
        try {
            const usuario = await Usuarios.find();
            res.json(usuario);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener usuario por Id
    usuarioPorId: async (req, res) => {
        const id = req.params.id;
        try {
            const usuarioId = await Usuarios.findById(id)
            res.json(usuarioId);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener usuario por Nombre
    usuarioPorNombre: async (req, res) => {
        const {nombre} = req.params;
        try {
            const nombreUsuario = await Usuarios.findOne({nombre: nombre})
            res.json(nombreUsuario);
        } catch{
            console.error('Error al obtener el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Crear un nuevo usuario
    crearUsuario: async (req, res) => {
        const dataUsuario = req.body;
        console.log(dataUsuario);
        try {
            const nuevoUsuario = new Usuarios(dataUsuario);
            const usuarioGuardado = await nuevoUsuario.save();
            res.status(201).json(usuarioGuardado);
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Otros métodos para manejar otras solicitudes relacionadas con los usuarios (actualizar, eliminar, etc.)

    // Actualizar un usuario existente
    actualizarUsuario: async (req, res) => {
        try {
            // const {_id} = req.params;
            const {usuarioid} =req.params;
            const actualizarUsuario = await Usuarios.findOneAndUpdate({usuarioid: usuarioid}, {$set: {nombre:'Julian'}});
            res.json(actualizarUsuario)
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Eliminar un usuario existente
    eliminarUsuario: async (req, res) => {
        try {
            const {usuarioid} = req.params;
            const eliminarUsuario = await Usuarios.findOneAndDelete({usuarioid: usuarioid});
            res.json(eliminarUsuario);
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Registro
    registro: async (req, res) => {
        try {
            const usuario = await Usuarios.find();
            const {nombre, apellido, correo, password} = req.body;
            
            const dataUsuario = {
                usuarioid: usuario.length + 1,
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                password: await bcrypt.hash(password,10)
            }
            
            const nuevoUsuario = new Usuarios(dataUsuario);
            const usuarioGuardado = await nuevoUsuario.save();
            // res.status(201).json(usuarioGuardado)
            res.status(201).json('Usuario agregado exitosamente')
        
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Login
    login: async (req, res) => {
        try {
            const {correo, password} = req.body;
            // console.log(correo)
            // console.log(password)
            const usuario = await Usuarios.find({correo: correo});

            if (!usuario) {
                return res.status(400).json({ message: "Usuario o Contraseña Incorectos"}) 
            }


            const isPasswordValid = await bcrypt.compare(password, usuario[0].password);

            if (!isPasswordValid) {
                return res.status(400).json({ message: "Usuario o Contraseña Incorectos"}) 
            }


            const token = jwt.sign({usuarioid: usuario[0]._id}, jwt_secret, {
                expiresIn: "1h"
            })
            // res.json({ message: "Loggin Exitoso", token})
            res.json({ message: "Loggin Exitoso"})

        } catch (error) {
            console.error('Error al logear usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

module.exports = usuarioController;

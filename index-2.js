const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pipe2893:aXUEPTHj7VXOBLHr@cluster0.c5hjrub.mongodb.net/');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión en la base de datos'));

db.once('open', () => {
    console.log("DB conected");

    const userShema = mongoose.Schema({
        nombres: String,
        apellidos: String
    });
    
    const Usuario = mongoose.model('Usuario', userShema);
    const app = express();

    app.use(express.json());

    //1
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $eq: 30}});
        res.json(usuarios);
    });

    //2
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $ne: 20}});
        res.json(usuarios);
    });

    //3
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $gt: 20}});
        res.json(usuarios);
    });

    //4
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $lt: 20}});
        res.json(usuarios);
    });

    //5
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $gte: 20}});
        res.json(usuarios);
    });

    //6
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $lte: 20}});
        res.json(usuarios);
    });

    //7
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $in: [5, 10, 15]}});
        res.json(usuarios);
    });

    //8
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $nin: [5, 10, 15]}});
        res.json(usuarios);
    });

    //9
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({edad: { $exists: true}});
        res.json(usuarios);
    });

    //10
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find({nombres: { $regex: /^robin/ }});
        res.json(usuarios);
    });

    //11
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find(
            { $and:
                [
                    { edad: { $gt: 20}},  //mayor que
                    { edad: { $lt: 30}}   //menor que
                ]
            });
        res.json(usuarios);
    });

    //12
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find(
            { $and:
                [
                    { edad: { $lt: 20}},  //menor que
                    { edad: { $gt: 30}}   //mayor que
                ]
            });
        res.json(usuarios);
    });

    //13
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find(
            { edad: { $not: { $gt: 30} } } );   //$gt mayor que
        res.json(usuarios);
    });

    //14
    app.get('/api/usuarios', async (req, res) => {
        const usuarios = await Usuario.find(
            { $nor:
                [
                    { edad: { $lt: 20}},  //$lt menor que
                    { edad: { $gt: 30}}   //$gt mayor que
                ]
            });
        res.json(usuarios);
    });

    app.listen(3001, () => {
        console.log("Servidor corriendo en el puerto 3001");
    });

});

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pipe2893:GVjln1bdayemMJxr@empleo.msfwmfh.mongodb.net/');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión en la base de datos'));

db.once('open', () => {
    console.log("DB conected");

    const userShema = mongoose.Schema({
        nombres: String,
        apellidos: String
    });
    
    const User = mongoose.model('User', userShema);
    const Empresa = mongoose.model('Empresa', userShema);

    const app = express();

    app.use(express.json());

    //1. listado de todos los usuarios- /api/users
    app.get('/api/users', async (req, res) => {
        const users = await User.find();
        res.json(users)
    });

    //2. listado de solo 10 usuarios- /api/users/limit
    app.get('/api/users/limit', async (req, res) => {
        const users = await User.find().limit(10);
        res.json(users)
    });
    
    //3. listado de todas las empresas- /api/empresas
    app.get('/api/empresas', async (req, res) => {
        const empresas = await Empresa.find();
        res.json(empresas)
    });

    //4. listado de usuarios que sea de la empresa id 5
    app.get('/api/users/empresa_id', async (req, res) => {
        const users = await User.find({ empresa_id: 5 })
        res.json(users)
    });

    //5. listado de empresas que sean de bangladesh- /api/companies/city/Bangladesh
    app.get('/api/empresas/ciudad/Bangladesh', async (req, res) => {
        const empresas = await Empresa.find({ ciudad: "Bangladesh" });
        res.json(empresas)
    });

    app.get('/', (req, res) => {
        res.json({
            message: 'Hello World!',
            users: '/api/users',
            empresas: '/api/empresas'
        })
    });

    app.listen(3000, () => {
        console.log("Servidor corriendo en el puerto 3000");
    });

});

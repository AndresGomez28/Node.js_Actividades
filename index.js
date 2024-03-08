// Importación de los módulos necesarios
const express = require('express'); // Módulo para crear el servidor Express
const mongoose = require('mongoose'); // Módulo para interactuar con MongoDB

// Conexión a la base de datos MongoDB Atlas
mongoose.connect('mongodb+srv://pipe2893:GVjln1bdayemMJxr@empleo.msfwmfh.mongodb.net/');

// Obtiene la conexión a la base de datos y maneja los errores
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión en la base de datos'));

// Una vez que la conexión a la base de datos se realiza con éxito, se ejecuta este callback
db.once('open', function(){
    console.log('Conectado a MongoDB');

    // Define el esquema del usuario utilizando Mongoose
    const userSchema = mongoose.Schema({
        nombres: String,
        apellidos: String
    });

    // Crea el modelo 'User' a partir del esquema definido
    const User = mongoose.model('User', userSchema);

    // Crea una instancia de la aplicación Express
    const app = express();

    // Middleware para parsear las solicitudes JSON
    app.use(express.json());

    ///1. listado de todos los usuarios- /api/users
    app.get('/api/users', async (req, res) => {
        // Busca todos los usuarios en la base de datos
        const users = await User.find();
        // Envia los usuarios como respuesta en formato JSON
        res.json(users)
        // console.log(users);
    });

    //2. listado de solo 10 usuarios- /api/users/limit
    app.get('/api/users?limit=10', async (req, res) => {
        // Busca todos los usuarios en la base de datos
        const users = await User.find();
        // Envia los usuarios como respuesta en formato JSON
        res.json(users)
    });

    //3. listado de todas las empresas- /api/companies
    app.get('/api/empresas', async (req, res) => {
        // Busca todos los usuarios en la base de datos
        const users = await User.find();
        // Envia los usuarios como respuesta en formato JSON
        res.json(users)
        // console.log(users);
    });

    //4. listado de usuarios que sea de la empresa id 5- api/users/companies/5
    app.get('/api/users/empresas/5', async (req, res) => {
        // Busca todos los usuarios en la base de datos
        const users = await User.find();
        // Envia los usuarios como respuesta en formato JSON
        res.json(users)
        // console.log(users);
    });

    //5. listado de usuarios que sean de bangladesh- /api/companies/city/Bangladesh
    app.get('/api/empresas/ciudad/Bangladesh', async (req, res) => {
        // Busca todos los usuarios en la base de datos
        const users = await User.find();
        // Envia los usuarios como respuesta en formato JSON
        res.json(users)
        // console.log(users);
    });

    // Inicia el servidor Express en el puerto 3000
    app.listen(3000, function(){
        console.log('Servidor arriba');
    });
});

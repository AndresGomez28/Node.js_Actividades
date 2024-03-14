const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();
const port = 3000;

// Conecta a la base de datos MongoDB
connectDB();

// Configura las rutas
app.use('/', routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

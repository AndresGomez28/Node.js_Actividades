const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./src/config/database');
const routes = require('./src/routes/index-profesores');

const app = express();
const port = 3004;

// Conecta a la base de datos MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configura las rutas
app.use('/', routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

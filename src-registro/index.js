const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('../src-04/config/database');
const routes = require('../src-04/routes/index');
const auth = require('../src-04/middelware/auth');

const app = express();
const port = 3005;

// Conecta a la base de datos MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(auth.initialize())

// Configura las rutas
app.use('/', routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

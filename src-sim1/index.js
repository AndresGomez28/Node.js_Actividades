const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('../src-sim1/config/database');
const routes = require('../src-sim1/routes/index');
const auth = require('../src-sim1/middelware/auth');

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

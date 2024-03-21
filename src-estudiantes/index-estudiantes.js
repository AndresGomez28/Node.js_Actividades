const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const routes = require('./routes/index-estudiantes');

const app = express();
const port = 3003;

//Conecta a la DB mongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rutas
app.use('/', routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: Number,
    nombres: String,
    apellidos: String,
    correo: String,
    edad: Number,
    password: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;
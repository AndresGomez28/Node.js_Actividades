const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    correo: String,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
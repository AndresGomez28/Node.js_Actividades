const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/api/v1/users', userController.getAllUsers);


module.exports = router;
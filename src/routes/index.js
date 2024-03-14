const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/api/v1/users', userController.getAllUsers);

router.post('/api/v1/users', userController.createUser);

router.delete('/api/v1/users', userController.deleteUser);


module.exports = router;

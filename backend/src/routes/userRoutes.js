const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// GET a single user
router.get('/:id', userController.getUserById);

// POST create a new user
router.post('/', userController.createUser);

// PUT update a user
router.put('/:id', userController.updateUser);

// DELETE a user
router.delete('/:id', userController.deleteUser);

// POST user login
router.post('/login', userController.loginUser);

// POST user logout
router.post('/logout', userController.logoutUser);

module.exports = router;
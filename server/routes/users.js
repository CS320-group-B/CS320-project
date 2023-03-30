const express = require('express');

const { getUsers, addUser, updateUser, deleteUser, signin, signup } = require('../controllers/users.js');

const router = express.Router();


router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
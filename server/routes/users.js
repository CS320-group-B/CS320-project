const express = require('express');
const auth = require('../middleware/auth.js');

const { getUsers, addUser, updateUser, deleteUser, signin, signup } = require('../controllers/users.js');

const router = express.Router();


router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', auth, deleteUser);

module.exports = router;
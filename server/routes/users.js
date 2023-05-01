const express = require('express');
const auth = require('../middleware/auth.js');
const updPassword = require('../middleware/updatePassword.js')

const { getUser, addUser, updateUser, deleteUser, signin, signup } = require('../controllers/users.js');

const router = express.Router();


router.post('/signin', signin);
router.post('/signup', signup);
router.get('/:id', auth, getUser);
router.post('/', auth, addUser);
router.put('/:id', auth, updPassword, updateUser);
router.delete('/:id', auth, deleteUser);

module.exports = router;
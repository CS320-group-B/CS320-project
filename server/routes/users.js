const express = require('express');
const auth = require('../middleware/auth.js');
const updPassword = require('../middleware/updatePassword.js')

const { getUser, addUser, updateUser, deleteUser, signin, signup, addTaken, removeTaken } = require('../controllers/users.js');

const router = express.Router();


router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', auth, getUser);
router.post('/', auth, addUser);
router.put('/', auth, updPassword, updateUser);
router.put('/addTaken', auth, addTaken);

router.delete('/removeTaken', auth, removeTaken);
router.delete('/', auth, deleteUser);

module.exports = router;
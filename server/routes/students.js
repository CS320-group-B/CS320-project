import express from 'express';
import { getUsers, addUser, updateUser, deleteUser, signin, signup } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/', getUser);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
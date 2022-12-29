import express from 'express';
import { deleteUser, getUser, getUsers, postUsers, updateUser } from '../controllers/users.js';

const router = express.Router();

// Every route will start with /users
router.get('/', getUsers);

router.post('/', postUsers);

// Getting user by their specific id
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

// Patch is used for partial updation while put is used to compltely change in tha data base
router.patch('/:id', updateUser);

export default router;
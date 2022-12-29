import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

// Every route will start with /users
router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  // console.log('Post Route Reached!');
  const user = req.body;

  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;

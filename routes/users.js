import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

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

// Getting user by their id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted from the data base!`);
});

export default router;

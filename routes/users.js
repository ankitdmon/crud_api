import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: 'Ankit',
    lastName: 'Mishra',
    Age: 21,
  },
  {
    firstName: 'Apoorva',
    lastName: 'Mishra',
    Age: 21,
  },
];

// Every route will start with /users
router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  // console.log('Post Route Reached!');
  const user = req.body;
  users.push(user);
  
  res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;

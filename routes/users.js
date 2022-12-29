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


});

export default router;

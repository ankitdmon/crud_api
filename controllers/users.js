import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const postUsers = (req, res) => {
  // console.log('Post Route Reached!');
  const user = req.body;

  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database!`);
};


export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted from the data base!`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, Age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }
  if (lastName) {
    userToBeUpdated.lastName = lastName;
  }
  if (Age) {
    userToBeUpdated.Age = Age;
  }

  res.send(`User with the id ${id} has been updated!`);
};
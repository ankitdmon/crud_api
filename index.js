import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Route
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from HomePage..');
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost ${PORT}`));
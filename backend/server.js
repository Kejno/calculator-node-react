import express from 'express';
import { calc } from './calculate.js';

const app = express();

app.get('/api', (req, res) => {
  try {
    return res.status(200).end(calc(req.query).toString());
  } catch (error) {
    return res.status(500).end('Что-то пошло не так');
  }
});

app.get('/', (req, res) => {
  res.send('API is running....');
});

const PORT = 5050;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

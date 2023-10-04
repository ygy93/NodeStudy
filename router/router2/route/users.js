import express from 'express';

const router = express.Router();

router
.get('/', (req, res, next) => {
  res.send('GET : users');
})
.post('/', (req, res, next) => {
  res.send('POST : users');
})
.put('/:name', (req, res, next) => {
  const name = req.params.name;
  res.status(201).send(`PUT : ${name}`);
})
.delete('/:name/:address', (req, res, next) => {
  const { name, address } = req.params;
  res.send(`DELETE : ${name}, ${address}`);
})

export default router;
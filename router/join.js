import express from 'express';

const router = express.Router();

router
// POST : name, address --> http://localhost:8080/join --> res : 201 전송
.post('/', (req, res, next) => {
  const { name, address } = req.body;
  console.log(`name, address --> ${name}, ${address}`);
  // res.send(`name, address --> ${name}, ${address}`);
  res.status(201).send('finish');
})

// 404 에러 처리
.use((req, res, next) => {
  res.status(404).send('404 Not Found Page');
});

export default router;
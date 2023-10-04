import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).send('404 Not Found Page');
})

export default router;
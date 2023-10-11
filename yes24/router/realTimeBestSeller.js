import express from 'express';
import { realTimeBestSellerList } from './data.js';

const router = express.Router();

router
.get('/:page', (req, res, next) => {
  res.json(realTimeBestSellerList);
})

export default router;
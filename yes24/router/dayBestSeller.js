import express from 'express';
import { dayBestSellerList } from './data.js';

const router = express.Router();

router
.get('/:page', (req, res, next) => {
  res.json(dayBestSellerList);
})

export default router;
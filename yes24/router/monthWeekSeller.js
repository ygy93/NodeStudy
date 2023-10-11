import express from 'express';
import { MonthWeekSellerList } from './data.js';

const router = express.Router();

router
.get('/:page', (req, res, next) => {
  res.json(MonthWeekSellerList);
})

export default router;
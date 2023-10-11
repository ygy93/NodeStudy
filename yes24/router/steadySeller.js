import express from 'express';
import { SteadySellerList } from './data.js';

const router = express.Router();

router
.get('/:page', (req, res, next) => {
  res.json(SteadySellerList);
})

export default router;
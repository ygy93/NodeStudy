import express from 'express';
import { SaleSellerList } from './data.js';

const router = express.Router();

router
.get('/:page', (req, res, next) => {
  res.json(SaleSellerList);
})

export default router;
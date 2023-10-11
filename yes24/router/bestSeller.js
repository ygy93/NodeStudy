import express from 'express';
import ejs from 'ejs';
import * as list from './data.js';

const router = express.Router();

// let SellerList = []; // url, title, name, price, grade

router
.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/list.ejs', {})
  .then(data => res.end(data));
})
.get('/:page', (req, res, next) => {
  res.json(list.bestSellerList);
})

/* .post('/', (req, res, next) => {
  const { url, title, name, price, grade } = req.body;

  const nid = Math.trunc(Math.random() * 1000);

  SellerList.push({ nid, url, title, name, price, grade });
}) */

export default router;
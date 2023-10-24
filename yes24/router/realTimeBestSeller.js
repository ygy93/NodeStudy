import express from 'express';
import { realTimeBestSellerList } from './data.js';
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();

router
.get('/:page', (req, res, next) => {
  const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'rtbs';";

  conn.query(sql, (err, rows) => {
    if(err) console.log(err)
    else res.json(rows);
  })

  // res.json(realTimeBestSellerList);
})

export default router;
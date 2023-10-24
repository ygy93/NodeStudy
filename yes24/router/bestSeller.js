import express from 'express';
import ejs from 'ejs';
import * as list from './data.js';
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();

// let SellerList = []; // url, title, name, price, grade

router
.get('/', (req, res, next) => {
  const sql = 'select img, bname, bname_comment, author, translator, publisher, price, dc, bs_id from yes24_books';

  // conn.query(sql, (err, rows, fields) => {
  //   if(err) console.log(err);
  //   else {
      ejs
      .renderFile('./template/list.ejs', {})
      .then(data => res.end(data));
  //   }
  // })
  
})

.get('/:page', (req, res, next) => {
  // const { img, bname, bname_comment, author, translator, publisher, pdate, price, dc, bs_id } = req.body;
  const params = 'bid';
  const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'bs';";
  conn.query(sql,(err, rows) => {
    if(err) console.log(err);
    else res.json(rows);
  })
})

/* .get('/:page', (req, res, next) => {
  res.json(list.bestSellerList);
}) */



export default router;
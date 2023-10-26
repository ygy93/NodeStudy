import express from 'express';
import * as yes24Controller from '../controller/yes24Controller.js';
// import ejs from 'ejs';
// import * as list from './data.js';
// import dbConfig from '../db/database.js';

// const conn = dbConfig.init();
// dbConfig.connect(conn);

const router = express.Router();

// let SellerList = []; // url, title, name, price, grade

router
.get('/', yes24Controller.getBs)

/* .get('/:page', (req, res, next) => {
  // const { img, bname, bname_comment, author, translator, publisher, pdate, price, dc, bs_id } = req.body;
  const params = 'bid';
  const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'bs';";
  conn.query(sql,(err, rows) => {
    if(err) console.log(err);
    else res.json(rows);
  })
}) */

.get('/:page', yes24Controller.getBsPage)



export default router;
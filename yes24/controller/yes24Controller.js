import * as yes24Repository from '../repository/yes24Repository.js';
import ejs from 'ejs';

/* getBs, 베스트셀러 */
export async function getBs(req, res, next) {
  const rows = await yes24Repository.getBs();

  ejs
  .renderFile('./template/list.ejs', {bestSellerList : rows})
  .then((data) => {
    res.end(data)
  })
  .catch(console.error);

  // const sql = 'select img, bname, bname_comment, author, translator, publisher, price, dc, bs_id from yes24_books';
  // conn.query(sql, (err, rows, fields) => {
  //   if(err) console.log(err);
  //   else {
      // ejs
      // .renderFile('./template/list.ejs', {})
      // .then(data => res.end(data));
  //   }
  // })
}
export async function getBsPage(req, res, next) {
  const rows = await yes24Repository.getBsPage();

  res.json(rows);
}

/* getDbs 일별베스트셀러 */
export async function getDbs(req, res, next) {
  const rows = await yes24Repository.getDbs('dbs');

  res.json(rows)
  
  // const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'dbs';";
  // conn.query(sql, (err, rows) => {
  //   if(err) console.log(err)
  //   else res.json(rows);
  // })

  // res.json(dayBestSellerList);
}

/* getMbs 월/주별 베스트셀러 */
export async function getMbs(req, res, next) {
  const rows = await yes24Repository.getMbs();

  res.json(rows)


  // const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'mbs';";
  // conn.query(sql, (err, rows) => {
  //   if(err) console.log(err)
  //   else res.json(rows);
  // })
  // res.json(MonthWeekSellerList);
}

/* getRtbs 실시간 베스트셀러 */
export async function getRtbs(req, res, next) {
  const rows = await yes24Repository.getRtbs();

  res.json(rows)

  // const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'rtbs';";
  // conn.query(sql, (err, rows) => {
  //   if(err) console.log(err)
  //   else res.json(rows);
  // })
  // res.json(realTimeBestSellerList);
}

/* getHpbs 세일 베스트셀러 */
export async function getHpbs(req, res, next) {
  const rows = await yes24Repository.getHpbs();

  res.json(rows)

  // const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'hpbs';";
  // conn.query(sql, (err, rows) => {
  //   if(err) console.log(err)
  //   else res.json(rows);
  // })
  // res.json(SaleSellerList);
}

/* getSs 스테디셀러 */
export async function getSs(req, res, next) {
  const rows = await yes24Repository.getSs();

  res.json(rows)

  // const sql = "select * from yes24_books yb inner join yes24_bs_category yc on yb.bs_id = yc.bs_id where yb.bs_id = 'ss';";
  // conn.query(sql, (err, rows) => {
  //   if(err) console.log(err)
  //   else res.json(rows);
  // })
  // res.json(SteadySellerList);
}
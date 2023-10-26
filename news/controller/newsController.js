import * as newsRepository from '../repository/newsRepository.js';
import ejs from 'ejs';

/* getAll */
export async function getAll(req, res, next) {
  const rows = await newsRepository.getAll();

  ejs
  .renderFile('./template/list.ejs', {list : rows})
  .then(data => res.end(data))
  .catch(console.error);

  // const sql = 'select nid, url, title, content, left(rdate, 10) as rdate from news';
  // conn.query(sql, (err, rows, field) => {
  //   if(err){
  //     console.log(err);
  //   } else {
  //     ejs.renderFile('./template/list.ejs', {list : rows})
  //   .then(data => res.end(data));
  //   }
  // });
  // ejs.renderFile('./template/list.ejs', {newsList})
  // .then(data => res.end(data));
}

/* createNews, post:register */
export async function createNews(req, res, next) {
  const { url, title, content } = req.body;
  const result = await newsRepository.createNews(url, title, content);
  if(result === 'success') res.redirect('/news');

  // const sql = 'insert into news(url, title, content, rdate) values(?, ?, ?, curdate())';
  // const params = [url, title, content];
  // conn.query(sql, params, (err) => {
  //   if(err) console.log(err)
  //   else res.redirect('/news');
  // })
  // const nid = Math.trunc(Math.random() * 1000);
  // let rdate = new Date(Date.now());
  // rdate = rdate.toLocaleDateString();
  // newsList.push({nid, url, title, content, rdate});
  // res.redirect('/news');
}

/* getNews, get:nid */
export async function getNews(req, res, next) {
  const { nid } = req.params;
  const rows = await newsRepository.getNews(nid);
  ejs
  .renderFile('./template/contents.ejs', {newsContent : rows[0]}) // 클릭한 것의 첫번째꺼를 가져오기때문에 배열 0번째
  .then(data => {
    res.end(data);
  })
  .catch(console.error)

  // const sql = 'select nid, url, title, content, left(rdate, 10) as rdate from news where nid = ?';
  // conn.query(sql, nid, (err, rows, field) => {
  //   if(err) console.log(err);
  //   else {
  //     // console.log(rows[0]);
  //     ejs
  //     .renderFile('./template/contents.ejs', {newsContent : rows[0]}) // 클릭한 것의 첫번째꺼를 가져오기때문에 배열 0번째
  //     .then(data => {
  //       res.end(data);
  //     })
  //     .catch(console.error)
  //   }
  // })
  // const newsContent = newsList.filter((news) => news.nid == parseInt(nid))[0];
  // ejs
  // .renderFile('./template/contents.ejs', {newsContent})
  // .then(data => {
  //   res.end(data);
  // })
  // .catch(console.error)
}

/* remove, delete */
export async function remove(req, res, next) {
  const { nid } = req.body;
  const result = await newsRepository.remove(nid);
  if(result === 'success') res.status(204).send('delete successs');

  // const sql = 'delete from news where nid = ?';
  // conn.query(sql, nid, (err) => {
  //   if(err){
  //     console.log(err);
  //   } else {
  //     res.status(204).send('delete successs');
  //   }
  // });
}
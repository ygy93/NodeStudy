import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js'

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();

// let newsList = []; // nid, url, title, content, rdate

router.use(express.json());
router.use(express.urlencoded());

router
.get('/', (req, res, next) => {
  const sql = 'select nid, url, title, content, left(rdate, 10) as rdate from news';

  conn.query(sql, (err, rows, field) => {
    if(err){
      console.log(err);
    } else {
      ejs.renderFile('./template/list.ejs', {list : rows})
    .then(data => res.end(data));
    }
  });

  // ejs.renderFile('./template/list.ejs', {newsList})
  // .then(data => res.end(data));
})
.post('/register', (req, res, next) => {
  const { url, title, content } = req.body;

  const sql = 'insert into news(url, title, content, rdate) values(?, ?, ?, curdate())';

  const params = [url, title, content];

  conn.query(sql, params, (err) => {
    if(err) console.log(err)
    else res.redirect('/news');
  })

  // const nid = Math.trunc(Math.random() * 1000);

  // let rdate = new Date(Date.now());
  // rdate = rdate.toLocaleDateString();

  // newsList.push({nid, url, title, content, rdate});
  // res.redirect('/news');
})
.get('/:nid', (req, res, next) => {
  const { nid } = req.params;

  const sql = 'select nid, url, title, content, left(rdate, 10) as rdate from news where nid = ?';

  conn.query(sql, nid, (err, rows, field) => {
    if(err) console.log(err);
    else {
      // console.log(rows[0]);
      ejs
      .renderFile('./template/contents.ejs', {newsContent : rows[0]}) // 클릭한 것의 첫번째꺼를 가져오기때문에 배열 0번째
      .then(data => {
        res.end(data);
      })
      .catch(console.error)
    }
  })

  // const newsContent = newsList.filter((news) => news.nid == parseInt(nid))[0];

  // ejs
  // .renderFile('./template/contents.ejs', {newsContent})
  // .then(data => {
  //   res.end(data);
  // })
  // .catch(console.error)
})

.delete('/', (req, res, next) => {
  const { nid } = req.body;

  const sql = 'delete from news where nid = ?';
  conn.query(sql, nid, (err) => {
    if(err){
      console.log(err);
    } else {
      res.status(204).send('delete successs');
    }
  });
})

export default router;
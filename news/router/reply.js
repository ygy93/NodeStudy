import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();

// let replyList = [];

router.use(express.json());
router.use(express.urlencoded());

// 댓글 등록 : POST: /reply
router
.post('/', (req, res, next) => {
  const {  content, nid } = req.body;
  const sql ='insert into news_reply(content, nid, redate) values(?, ?, sysdate())';
  const params = [content, nid];

  conn.query(sql, params, (err) => {
    if(err) console.log(err)
    else res.status(201).send('create success');
  })


  // replyList.unshift({ nid, replyContent });
  // res.status(201).send('create success');
})
.get('/:nid', (req, res, next) => {
  const { nid } = req.params;

  const sql = 'select rid, content, nid, redate from news_reply where nid = ?';

  conn.query(sql, nid, (err, rows, field) => {
    if(err) console.log(err);
    else res.json(rows);
  })

  // const newReply = replyList.filter((reple) => reple.nid === nid);

  // res.json(newReply);
})

.delete('/', (req, res, next) => {
  const { nid } = req.body;

  const sql = 'delete from news_reply where nid = ?';
  conn.query(sql, nid, (err) => {
    if(err){
      console.log(err);
    } else {
      res.status(204).send('delete successs');
    }
  });
})

export default router;
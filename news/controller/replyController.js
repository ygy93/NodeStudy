import * as replyRepository from '../repository/replyRepository.js';
import ejs from 'ejs';

/* create */
export async function create(req, res, next){
  const { content, nid } = req.body;
  const result = await replyRepository.create(content, nid);
  if(result === 'success') res.status(201).send('create success');

  // const sql ='insert into news_reply(content, nid, redate) values(?, ?, sysdate())';
  // const params = [content, nid];

  // conn.query(sql, params, (err) => {
  //   if(err) console.log(err)
  //   else res.status(201).send('create success');
  // })
  // replyList.unshift({ nid, replyContent });
  // res.status(201).send('create success');
}

/* getReply */
export async function getReply(req, res, next) {
  const { nid } = req.params;
  const rows = await replyRepository.getReply(nid);
  
  ejs
  .renderFile('./template/reply.ejs', {newsContent : rows})
  .then(res.json(rows))
  .catch(console.error);

  // const sql = 'select rid, content, nid, redate from news_reply where nid = ?';
  // conn.query(sql, nid, (err, rows, field) => {
  //   if(err) console.log(err);
  //   else res.json(rows);
  // })
  // const newReply = replyList.filter((reple) => reple.nid === nid);
  // res.json(newReply);
}

/* remove */
export async function remove(req, res, next) {
  const { nid } = req.body;
  const result = await replyRepository.remove(nid);
  if(result === 'success') res.status(204).send('delete successs');

  // const sql = 'delete from news_reply where nid = ?';
  // conn.query(sql, nid, (err) => {
  //   if(err){
  //     console.log(err);
  //   } else {
  //     res.status(204).send('delete successs');
  //   }
  // });
}
import express from 'express';
import ejs from 'ejs';

const router = express.Router();

let newsList = []; // nid, url, title, content, rdate

router.use(express.json());
router.use(express.urlencoded());

router
.get('/', (req, res, next) => {
  ejs.renderFile('./template/list.ejs', {newsList})
  .then(data => res.end(data));
})
.post('/register', (req, res, next) => {
  const { url, title, content } = req.body;

  const nid = Math.trunc(Math.random() * 1000);

  let rdate = new Date(Date.now());
  rdate = rdate.toLocaleDateString();

  newsList.push({nid, url, title, content, rdate});
  res.redirect('/news');
})
.get('/:nid', (req, res, next) => {
  const { nid } = req.params;
  const newsContent = newsList.filter((news) => news.nid == parseInt(nid))[0];

  ejs
  .renderFile('./template/contents.ejs', {newsContent})
  .then(data => {
    res.end(data);
  })
  .catch(console.error)
})
/* .get('/:nid', (req, res, next) => {
  const { nid, replyContent } = req.params;

  const newReply = replyList.filter((reple) => reple.nid === parseInt(nid))[0];

  ejs
  .renderFile('./template/reply.ejs', {newReply})
  .then(data => {
    res.end(data);
  })
}) */

export default router;
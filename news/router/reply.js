import express from 'express';
import ejs from 'ejs';

const router = express.Router();

let replyList = [];

router.use(express.json());
router.use(express.urlencoded());

// 댓글 등록 : POST: /reply
router
.post('/', (req, res, next) => {
  const { nid, replyContent } = req.body;
  //console.log({ nid, replyContent });
  replyList.push({ nid, replyContent });
  res.status(201);
})
.get('/:nid', (req, res, next) => {
  const { nid, replyContent } = req.params;

  const newReply = replyList.filter((reple) => reple.nid === parseInt(nid))[0];

  ejs
  .renderFile('./template/reply.ejs', {newReply})
  .then(data => {
    res.end(data);
  })
})

export default router;
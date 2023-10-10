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

  replyList.unshift({ nid, replyContent });
  res.status(201).send('create success');
})
.get('/:nid', (req, res, next) => {
  const { nid } = req.params;

  const newReply = replyList.filter((reple) => reple.nid === nid);

  res.json(newReply);
})

export default router;
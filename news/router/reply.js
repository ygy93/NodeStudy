import express from 'express';
import * as replyController from '../controller/replyController.js';
// import ejs from 'ejs';
// import dbConfig from '../db/database.js';

// const conn = dbConfig.init();
// dbConfig.connect(conn);

const router = express.Router();

// let replyList = [];

router.use(express.json());
router.use(express.urlencoded());

// 댓글 등록 : POST: /reply
router
.post('/', replyController.create)

.get('/:nid', replyController.getReply)

.delete('/', replyController.remove)

export default router;
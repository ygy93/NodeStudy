import express from 'express';
import * as newsController from '../controller/newsController.js';
// import ejs from 'ejs';
// import dbConfig from '../db/database.js'

// const conn = dbConfig.init();
// dbConfig.connect(conn);

const router = express.Router();

// let newsList = []; // nid, url, title, content, rdate

router.use(express.json());
router.use(express.urlencoded());

router
.get('/', newsController.getAll)

.post('/register', newsController.createNews)

.get('/:nid', newsController.getNews)

.delete('/', newsController.remove)

export default router;
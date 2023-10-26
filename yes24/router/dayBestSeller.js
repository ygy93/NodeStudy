import express from 'express';
import * as yes24Controller from '../controller/yes24Controller.js';
// import { dayBestSellerList } from './data.js';
// import dbConfig from '../db/database.js';

// const conn = dbConfig.init();
// dbConfig.connect(conn);

const router = express.Router();

router
.get('/:page', yes24Controller.getDbs)

export default router;
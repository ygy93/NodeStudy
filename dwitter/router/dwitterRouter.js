import express from 'express';
import * as dwitterController from '../controller/dwitterController.js';
// import ejs from 'ejs';
// import dbConfig from '../db/database.js'

// const conn = dbConfig.init();
// dbConfig.connect(conn);

const router = express.Router();
// let dwitterList = [];

router.use(express.json());
router.use(express.urlencoded()); // 제이슨이 깨지지않고 넘어오게 해줌

// 1. GET : /dwitter - All Dwitter List
router
.get('/', dwitterController.getAll)

// 2. POST : /dwitter - Tweet create ( sql insert ), insert, update, delete 만 리턴됨
.post('/', dwitterController.create)

// 3. GET : /dwitter?id=자신의아이디 - My Dwitter List, GET : /dwitter/:id
.get('/:id', dwitterController.getDwitter)

// 4. PUT : /dwitter/:id - My Dwitter update
.put('/', dwitterController.update)

// 5. DELETE : /dwitter/:id - My Dwitter delete
.delete('/', dwitterController.remove)

export default router;
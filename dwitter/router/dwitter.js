import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js'

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();
// let dwitterList = [];

router.use(express.json());
router.use(express.urlencoded()); // 제이슨이 깨지지않고 넘어오게 해줌

// 1. GET : /dwitter - All Dwitter List
router
.get('/', (req, res, next) => {
  // const renderList = dwitterList
  // index.ejs + 동적 데이터

  const sql = 'select id, name, left(date, 10) as date, content from dwitter';
  conn.query(sql, (err, rows, field) => {
    if(err){
      console.log(err);
    } else {
      ejs
      .renderFile('./template/index.ejs', {list : rows})
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
    }
  });
  
})

// 2. POST : /dwitter - Tweet create ( sql insert ), insert, update, delete 만 리턴됨
.post('/', (req, res, next) => {
  const { id, name, content } = req.body; // 데이터 받아오기
  const sql = 'insert into dwitter(id, name, date, content) values(?, ?, curdate(), ?)'; // 데이터를 가져오는거면 ? 로 표시
  const params = [id, name, content]; // 데이터를 가져오면 반드시 params 를 써야함
  conn.query(sql, params, (err) => { // 쿼리로 실행
    if(err) console.log('query is not execute!!');
    else res.redirect('/dwitter'); // 위에서 한것들이 지워지고 다시 사용
  });

  // const pid = Math.trunc(Math.random() * 1000); // trunc 정수로 만듦
  // let date = new Date(Date.now());
  // date = date.toLocaleDateString(); // 지역 날짜로 변환
  // dwitterList.push({ pid, id, name, date, content });
})

// 3. GET : /dwitter?id=자신의아이디 - My Dwitter List, GET : /dwitter/:id
.get('/:id', (req, res, next) => {
  const { id } = req.params;

  const sql = "select id, name, left(date, 10) as date, content from dwitter where id = ?";

  conn.query(sql, id, (err, rows, field) => {
    if(err){
      console.log(err);
    } else {
      ejs
      .renderFile('./template/index.ejs', {list : rows})
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
    }
  });

  // const renderList = dwitterList.filter((dwitter) => dwitter.id === id);

  // ejs
  // .renderFile('./template/index.ejs', {renderList})
  // .then((data) => {
  //   res.end(data);
  // })

})

// 4. PUT : /dwitter/:id - My Dwitter update
.put('/', (req, res, next) => {
  const { id, content } = req.body;

  const sql = 'update dwitter set content = ? where id = ?';

  const params = [content, id];

  conn.query(sql, params, (err) => { // insert, update, delete ==> err
    if(err){
      console.log(err)
    } else {
      res.status(204).send('update success');
    }
  })

  // dwitterList.filter((dwitter) => {
  //   // html 에서 가져온 것들은 값이든 뭐든 전부 string 타입으로 넘어와서 값을 정수로 바꿔줌
  //   if(dwitter.id === parseInt(id)){ dwitter.content = content }
  // })
  // console.log(dwitterList);
  // res.status(204).send('update success');
})

// 5. DELETE : /dwitter/:id - My Dwitter delete
.delete('/', (req, res, next) => {
  const { id } = req.body;

  const sql = 'delete from dwitter where id = ?';
  conn.query(sql, id, (err) => {
    if(err){
      console.log(err);
    } else {
      res.status(204).send('delete successs');
    }
  });

  // dwitterList = dwitterList.filter((dwitter) => dwitter.id !== parseInt(id))

  // res.status(204).send('delete successs');
})

export default router;
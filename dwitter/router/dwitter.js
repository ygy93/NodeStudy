import express from 'express';
import ejs from 'ejs';

const router = express.Router();
let dwitterList = [];

router.use(express.json());
router.use(express.urlencoded()); // 제이슨이 깨지지않고 넘어오게 해줌

// 1. GET : /dwitter - All Dwitter List
router
.get('/', (req, res, next) => {
  const renderList = dwitterList
  // index.ejs + 동적 데이터
  ejs
  .renderFile('./template/index.ejs', {renderList})
  .then((data) => {
    res.end(data);
  })
  .catch(console.error);
})

// 2. POST : /dwitter - Tweet create
.post('/', (req, res, next) => {
  const { id, name, content } = req.body;
  const pid = Math.trunc(Math.random() * 1000); // trunc 정수로 만듦
  let date = new Date(Date.now());
  date = date.toLocaleDateString(); // 지역 날짜로 변환
  dwitterList.push({ pid, id, name, date, content });
  // console.log(dwitterList);
  res.redirect('/dwitter'); // 위에서 한것들이 지워지고 다시 사용
})

// 3. GET : /dwitter?id=자신의아이디 - My Dwitter List, GET : /dwitter/:id
.get('/:id', (req, res, next) => {
  const { id } = req.params;

  const renderList = dwitterList.filter((dwitter) => dwitter.id === id);

  ejs
  .renderFile('./template/index.ejs', {renderList})
  .then((data) => {
    res.end(data);
  })
})

// 4. PUT : /dwitter/:id - My Dwitter update
.put('/', (req, res, next) => {
  const { pid, content } = req.body;
  // console.log({pid, content});
  dwitterList.filter((dwitter) => {
    // html 에서 가져온 것들은 값이든 뭐든 전부 string 타입으로 넘어와서 값을 정수로 바꿔줌
    if(dwitter.pid === parseInt(pid)){ dwitter.content = content }
  })
  console.log(dwitterList);
  res.status(204).send('update success');
})

// 5. DELETE : /dwitter/:id - My Dwitter delete
.delete('/', (req, res, next) => {
  const { pid } = req.body;

  dwitterList = dwitterList.filter((dwitter) => dwitter.pid !== parseInt(pid))
  // console.log(dwitterList);
  res.status(204).send('delete successs');
})

export default router;
// app -> Router -> Controller <- DB 연동 필요시 -> Repository
//                  결과 전송
import * as dwitterRepository from '../repository/dwitterRepository.js';
import ejs from 'ejs';
import jwt from 'jsonwebtoken';

/* getAll */
export async function getAll(req, res) {
  // const renderList = dwitterList
  // index.ejs + 동적 데이터
  const rows = await dwitterRepository.getAll();

  // const sql = 'select id, name, left(date, 10) as date, content from dwitter';
  // conn.query(sql, (err, rows, field) => {
  //   if(err){
  //     console.log(err);
  //   } else {
      ejs
      .renderFile('./template/index.ejs', {list : rows})
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
  //   }
  // });
  
}

/* create */
export async function create(req, res, next) {
  const { id, name, content } = req.body; // 데이터 받아오기
  const result = await dwitterRepository.create(id, name, content);
  if(result === 'success') res.redirect('/dwitter');

  // const sql = 'insert into dwitter(id, name, date, content) values(?, ?, curdate(), ?)'; // 데이터를 가져오는거면 ? 로 표시
  // const params = [id, name, content]; // 데이터를 가져오면 반드시 params 를 써야함
  // conn.query(sql, params, (err) => { // 쿼리로 실행
  //   if(err) console.log('query is not execute!!');
  //   else res.redirect('/dwitter'); // 위에서 한것들이 지워지고 다시 사용
  // });

  // const pid = Math.trunc(Math.random() * 1000); // trunc 정수로 만듦
  // let date = new Date(Date.now());
  // date = date.toLocaleDateString(); // 지역 날짜로 변환
  // dwitterList.push({ pid, id, name, date, content });
}

/* getDwitter */
export async function getDwitter(req, res, next) {
  const { id } = req.params;

  const rows = await dwitterRepository.getDwitter(id);
  

  // const sql = "select id, name, left(date, 10) as date, content from dwitter where id = ?";

  // conn.query(sql, id, (err, rows, field) => {
  //   if(err){
  //     console.log(err);
  //   } else {
      ejs
      .renderFile('./template/index.ejs', {list : rows})
      .then((data) => {
        res.end(data);
      })
      .catch(console.error);
  //   }
  // });

  // const renderList = dwitterList.filter((dwitter) => dwitter.id === id);

  // ejs
  // .renderFile('./template/index.ejs', {renderList})
  // .then((data) => {
  //   res.end(data);
  // })

}


/* update */
export async function update(req, res, next) {
  // 로그인한 회원만 업데이트 가능하도록 체크
  // 1. 토큰 가져오기
  const token = req.cookies.x_auth;

  try {
    const verify = jwt.verify(token, 'XLlH0CHl3_3N')
    // console.log(verify);
    const { id, content } = req.body;
    
    if(id === verify.id) {
      const result = await dwitterRepository.update(id, content);
      if(result === 'success') res.status(204).send('update success!');
    } else {
      res.status(400).send('update fail!');
    }

  } catch {
    console.log(error);
  }

  

  // const sql = 'update dwitter set content = ? where id = ?';

  // const params = [content, id];

  // conn.query(sql, params, (err) => { // insert, update, delete ==> err
  //   if(err){
  //     console.log(err)
  //   } else {
  //     res.status(204).send('update success');
  //   }
  // })

  // dwitterList.filter((dwitter) => {
  //   // html 에서 가져온 것들은 값이든 뭐든 전부 string 타입으로 넘어와서 값을 정수로 바꿔줌
  //   if(dwitter.id === parseInt(id)){ dwitter.content = content }
  // })
  // console.log(dwitterList);
  // res.status(204).send('update success');
}


/* remove (delete) */
export async function remove(req, res, next) {
  const { id } = req.body;

  const result = await dwitterRepository.remove(id);
  if(result === 'success') res.status(204).send('delete success!');

  // const sql = 'delete from dwitter where id = ?';
  // conn.query(sql, id, (err) => {
  //   if(err){
  //     console.log(err);
  //   } else {
  //     res.status(204).send('delete successs');
  //   }
  // });

  // dwitterList = dwitterList.filter((dwitter) => dwitter.id !== parseInt(id))

  // res.status(204).send('delete successs');
}
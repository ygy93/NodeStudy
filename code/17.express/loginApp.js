const express = require('express');
const process = require('process');
const path = require('path');
const app = express();

// 회원정보 저장소 역할 (DB)
let memberList = []; // 전역변수로 설정하여 회원가입(join) 에 넣어주면 매번 새로운 배열을 넣을 수 있음

/* ----------------------------------- 메인페이지 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

/* ----------------------------------- 로그인 */
app.get('/login', (req, res) => {
  // console.log(path.join(__dirname, 'login.html'));
  // console.log(path.join(process.cwd(), 'login.html'));
  res.sendFile(path.join(__dirname, 'login.html'));
})

/* ----------------------------------- 로그인 실패 */
app.get('/loginFail', (req, res) => {
  res.sendFile(path.join(__dirname, 'loginFail.html'));
})

// use 는 요청이 아닌 바로바로 보냄
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/login', (req, res) => {
  // const id = req.body.id; // 입력한 아이디 정보
  // const pass = req.body.pass; // 입력한 비번 정보
  const { id, pass } = req.body;
  let result = 0;

  for (let i = 0; i < memberList.length; i++){
    let member = memberList[i];

    if (id === member.id && pass === member.pass){
      result = 1;
      i = memberList.length; // break;
    }
  }

  if (result == 1){
    res.redirect('/')
  } else {
    res.redirect('/loginFail')
  }
})

/* ----------------------------------- 회원가입 */
app.get('/join', (req, res) => {
  res.sendFile(path.join(__dirname, 'join.html'));
})

app.post('/join', (req, res) => {
  const { id, pass, gender, name } = req.body;

  memberList.push({ id, pass, gender, name })

  console.log(memberList);

  res.redirect('/')

  /* if ( id === 'test' && pass === '1234' && gender === 'man' && name === 'kim' ) {
    res.redirect('/')
  } else {
    res.redirect('/joinFail')
  } */
})

/* ----------------------------------- 회원가입 실패 */
app.get('/joinFail', (req, res) => {
  res.sendFile(path.join(__dirname, 'joinFail.html'));
})

/* ----------------------------------- 에러 */
app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'error.html'));
})

app.listen(8080);
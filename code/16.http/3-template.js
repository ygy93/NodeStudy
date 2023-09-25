const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'yang';
let course = [
  { name : 'HTML' },
  { name : 'CSS' },
  { name : 'JavaScript' },
  { name : 'Node.js' },
  { name : 'React.js' },
];
let scoreList = [
  { name : 'HTML', grade : 'C' },
  { name : 'CSS', grade : 'B' },
  { name : 'JavaScript', grade : 'A' },
  { name : 'Node.js', grade : 'S' },
  { name : 'React.js', grade : 'S' },
];

// 서버 생성하기
console.log('-- server start --');
const server = http.createServer((req, res) => {
  console.log('incoming');
  
  // 1. 클라이언트 요청 URL 받아오기
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');

  // 2. 패스 체크 : / --> index.ejs 띄우기
  if (url === '/'){
    // 3. ejs.renderFile(매개변수) <= 프로미스 타입 처리
    ejs.renderFile('./template/index.ejs', {name})
    .then((data) => res.end(data))
    .catch(console.error)

  } else if (url === '/course'){
    ejs.renderFile('./template/course.ejs', {course})
    .then((data) => res.end(data))
    .catch(console.error)

  } else if (url === '/score') {
    ejs.renderFile('./template/score.ejs', {scoreList})
    .then((data) => res.end(data))
    .catch(console.error)

  } else {
    ejs.renderFile('./template/error.ejs', {name})
    .then(data => res.end(data))
    .catch(console.error)
    
  }

})

server.listen(3000);
const express = require('express');
const server = express();

const course = [
  { name : 'HTML' },
  { name : 'CSS' },
  { name : 'JavaScript' },
  { name : 'Node' },
  { name : 'Express' },
];

server.get('/', (req, res) => {
  res.send('hello world~');
})

server.get('/course', (req, res) => {
  res.setHeader('Content-Type','application/json');
  res.status(200);
  res.json(course); // 캡슐화, 기존 순수코딩으로 제이슨을 문자열로 변환하고 다시 객체화해서 보내는 번거로운 일들을 안해도됨
})

server.post('/course', (req, res) => {
  const body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
  });

  req.on('end', () => {
    course.push(JSON.parse(Buffer.concat(body).toString()));
    res.status(201).end();
  })

})

server.listen(3300);
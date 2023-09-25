const http = require('http');
const fs = require('fs');

console.log('server start~');
const server = http.createServer((req, res) => {
  console.log('incoming');

  const url = req.url;

  res.setHeader('Content-Type', 'text/html');

  if(url === '/'){
    fs.createReadStream('./test/main.html').pipe(res);
  } else if (url === '/course'){
    fs.createReadStream('./test/course/course.html').pipe(res);
  } else if (url === '/login'){
    fs.createReadStream('./test/login/login.html').pipe(res);
  } else {
    fs.createReadStream('./test/error.html').pipe(res);
  }
  
})

server.listen(9000);
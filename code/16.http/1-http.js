const http = require('http');
const fs = require('fs');

// 서버 생성 : createServer()
console.log('server start~');
const server = http.createServer((req, res) => {
  console.log('incoming');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);

  const url = req.url;
  console.log(`url---> ${url}`);

  // 응답 생성
  // res.write('ddd'), res.end()
  // write 를 종료할때는 end 로 하지만 아래처럼 pipe 로 연결해주려면 res, 즉 받아오는걸 종료하면 안되므로 
  // 아래에서는 res.end 를 사용해서는 안됨
  res.setHeader('Content-Type', 'text/html');

  if (url === '/'){
    fs.createReadStream('./html/index.html').pipe(res);
    // res.end();
  } else if (url === '/course'){
    fs.createReadStream('./html/course.html').pipe(res);
    // res.end();
  } else {
    fs.createReadStream('./html/error.html').pipe(res);
    // res.end();
  }
});

server.listen(8080); // http://localhost:8080
const http = require('http');

const course = [
  { name : 'HTML' },
  { name : 'CSS' },
  { name : 'JavaScript' },
  { name : 'Node' },
  { name : 'Express' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/course'){
    if (method === 'GET'){
      const strCourse = JSON.stringify(course);
      
      res.writeHead(200, {
        'Content-Length' : Buffer.byteLength(strCourse),
        'Content-Type' : 'application/json',
      })
      .end(strCourse);

    } else if (method === 'POST'){
      // post 방식으로 요청이 들어오면 --> JSON 데이터 받기
      const body = [];

      req.on('data', (chunk) => {
        console.log(chunk.toString());
        body.push(chunk);
      });
      
      req.on('end', () => {
        // body 데이터를 string
        // string 문자열을 JSON 객체로 파싱
        // course 배열에 추가
        const bodyStr = Buffer.concat(body).toString();
        const bodyJson = JSON.parse(bodyStr);
        course.push(bodyJson);

        // 결과 완료 전송
        res.writeHead(201); // 처음 숫자는 Status Codes
        res.end();
      })

    }
  } else {
    res.write('File not Found');
    res.end();
  }

})

server.listen(8080);
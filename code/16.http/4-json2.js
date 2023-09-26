const http = require('http');

const address = [];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/test'){
    if (method === 'GET'){
      if(address.length != 0){
        res.writeHead(200, {
          'Content-Type' : 'application/json',
        })
        .end(JSON.stringify(address));

      } else {
        res.write('-- No Data --')
        res.end();
      }

    } else if (method === 'POST'){
      const body = [];

      req.on('data', (chunk) => {
        body.push(chunk);
      });
      
      req.on('end', () => {
        // const bodyStr = Buffer.concat(body).toString();
        // const bodyJson = JSON.parse(bodyStr);
        // address.push(bodyJson);

        address.push(JSON.parse(Buffer.concat(body).toString()));

        res.writeHead(201).end();
      })
    }

  } else {
    res.write('File not Found');
    res.end();
  }
})

server.listen(5000);
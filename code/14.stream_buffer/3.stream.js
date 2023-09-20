const fs = require('fs');

// 파일을 읽어오는 방법 --> stream
const readStream = fs.createReadStream('./file.txt', {highWaterMark:64,}); // highWaterMark 버퍼의 크기를 나타내며 객체모드의 경우는 객체의 수
const buf = [];
readStream.on('data', (chunk) => {
  buf.push(chunk);
  console.count('data');
  // console.log(chunk.toString());
  readStream.close();
});

readStream.on('close', () => {
  console.log(buf.length);
  console.log(buf);
  console.log(buf.join(''));
});
// readStream 을 이용하여 file.txt 파일의 내용을 16바이트씩 읽어서
// file-stream.txt 파일안에 writeStream 을 이용하여 저장해주세요.
const fs = require('fs');
const readStream = fs.createReadStream('./file.txt',{highWaterMark:16});
const writeStream = fs.createWriteStream('./file_stream.txt');

readStream.on('data',(chunk) => {
  writeStream.write(chunk);
}).on('close', () => {
  console.log('-- 끝 --');
})
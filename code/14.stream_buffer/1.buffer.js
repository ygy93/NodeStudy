const fs = require('fs');

const buf = Buffer.from('hi~asd');
console.log(buf); // 16진수
console.log(buf.length);
console.log(buf[0]); // 10진수
console.log(buf[1]);
console.log(buf[2]);
console.log(buf.toString()); // 문자열 출력

const buf2 = Buffer.alloc(buf.length);
console.log(buf2.length);
console.log(buf2);
buf2.copy(buf2); // buf 의 내용을 복사하여 buf2 에 저장
console.log(buf2);

const newBuf = Buffer.concat((buf,buf2));
console.log(newBuf);
console.log(newBuf.toString());
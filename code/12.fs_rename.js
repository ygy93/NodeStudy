const fs = require('fs');
// 파일명 변경
// fs 에서는 3가지 방식으로 제공

// synchoronous :renameSync(old, new)
/* try {
  fs.renameSync('./test.txt','./test_new.txt');
  console.log('-- 파일명을 성공적으로 변경하였습니다 --');
} catch (error) {
  console.log('-- 파일명이 어떠한 이유로 바뀌지 않았습니다 --');
  console.log(error);
}
console.log('-- test --'); */

// callback : rename(old, new, callback)
/* fs.rename('./test_new.txt','./test.txt', (error) => {
  console.log(error);
}) */

// promise : rename(old, new)
fs.promises.rename('./test.txt','./test_new.txt')
.then(() => console.log('바꿈ㅇㅇ'))
.catch(console.error)
.finally(() => console.log('-- terminate --'))
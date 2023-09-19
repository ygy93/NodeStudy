const fs = require('fs').promises;

// test.txt 파일을 읽어 콘솔에 출력
fs.readFile('./test.txt', { encoding : 'utf-8' })
.then(data => { console.log(data) })
.catch(console.error)

// test.txt 파일에 문자열 덮어쓰기
/* fs.writeFile('./test.txt', '덥고 졸리다')
.then(console.log('-- 텍스트 수정 완료 --'))
.catch(console.error) */

// test.txt 파일에 데이터 추가
/* fs.appendFile('./test.txt','\r\n기절수면 하고 싶다')
.then(console.log('-- 데이터 추가 완료 --'))
.catch(console.error) */

// test.txt 파일을 복사하기
/* fs.copyFile('./test.txt','./copytest.txt')
.catch(console.error); */

// 'sub-folder' 생성하기
fs.mkdir('sub-folder')
.then(console.log)
.catch(console.error);
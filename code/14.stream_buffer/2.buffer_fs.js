const fs = require('fs');
const process = require('process');

// 파일 읽기 전, 후 ==> 메모리 사용량 체크 ==> 콜백함수
console.log(process.memoryUsage().rss);
fs.readFile('./file.txt', (_, data) => { // 받아올 데이터 data, error 위치를 _ 로 공백으로 둘 수 있음
  fs.writeFile('./file2.txt', data, () => {
    console.log(process.memoryUsage().rss);
  })
  console.log('-- 끝 --');
  //console.log(data.toString());
})

// 파일 읽기 전, 후 ==> 메모리 사용량 체크 ==> 프로미스
console.log(process.memoryUsage().rss);
fs.promises.readFile('./file.txt', { encoding : 'utf-8' })
.then((data) => { 
  fs.promises.writeFile('./file3.txt',data)
  .then(console.log(process.memoryUsage().rss))
  .catch(console.error)
})
.catch(console.error)
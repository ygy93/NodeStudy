const { clear, table, trace } = require("console");

console.log('logging..');

console.log('log'); // 개발
console.info('info'); // 정보, 사용법
console.warn('warn'); // 경고
console.error('error'); // 에러

console.clear(); // 로그 삭제


// assert
console.assert(2 === 2, '동일함'); // 조건식이 true 이면 로그 출력 x
console.assert(2 === 3, '동일하지 않음'); // false 인 경우만 출력됨

// print object
const student = { name : '홍길동', age : 20, color:{default:'red'}}
console.log(student);
console.table(student);
console.dir(student, {showHidden:true, color:false, depth:0});

// time
console.time('for loop');
for(let i = 0; i < 10; i ++) {
  i++;
}
console.timeEnd('for loop');

// trace
function f1 () {
  f2();
}

function f2 () {
  f3();
}

function f3 () {
  console.log('function 3!!');
  console.trace(); // 선언한것들을 콘솔로그에 순서대로 어떻게 출력되는지 보여줌
}

f1();
const process = require('process')

console.log(process.execPath);
console.log(process.title);
console.log(process.version);
console.log(process.pid); // 프로세스 아이디
console.log(process.ppid); // 프로세스 부모의 아이디
console.log(process.platform);
console.log(process.env); // 모든 환경 변수
console.log(process.uptime());
console.log(process.cwd()); // 현재 경로 출력
console.log(process.cpuUsage());

// setTimeout(콜백함수, 3000); --> non-blocking
// 3초후에 'setTimeout!!' 출력
global.setTimeout(() => {
  console.log('setTimeout!!');
}, 3000)

// nextTick(콜백함수); --> non-blocking
process.nextTick(() => { // 비동기식 함수 중 가장 우선 순위가 높음
  console.log('nextTick!!');
});
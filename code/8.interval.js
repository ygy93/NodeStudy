// 1초에 정수를 하나씩 증가시하여 출력하는 함수
let num = 1;
const timer = setInterval((e) => {
  console.log(num++);

  /* if(num == 6){
    clearInterval(timer);
    console.log('셋인터벌을 종료');
  } */
}, 1000);

// 6초 후에 출력 종료
setTimeout(() => {
  console.log('셋인터벌을 종료');
  clearInterval(timer);
},6000)
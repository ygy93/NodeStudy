let count = 0;

export function increase() {
  count++
}

export function getCount() {
  return count;
}

module.exports.increase=increase; // 앞쪽 increase 는 export 될때 함수명, 뒤는 함수명
module.exports.getCount=getCount;
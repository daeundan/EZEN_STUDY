// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map((number) => number * 2);

// console.log(newNumbers);
// console.log(numbers);

// const newNumbers01 = numbers.map((number, index) => index + number * 3);

// console.log(newNumbers01);

// const scores = [90, 35, 64, 88, 45, 92];

// const highScores = scores.filter((score) => score >= 85);
// console.log(highScores);
// console.log(scores);

// 누산기
const numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((total, current) => total + current, 0);

console.log(result);

// total 참조변수 하는 역할 : 연산된 값을 누적 및 저장해 놓는 변수의 역할을 함
// 타입스크립트 => 명령형, 선언형 프로그래밍 함수 쓸 것임
// 저급함수라고 함 즉, low level 함수 라고 함
// 진정한 프로그래밍 영역 들어가면 고급함수를 씀 map , filter - 커스터마이징 함수로 만듦 (filter와 map의 기능을 구현하는 함수를 만들어 냄) 이때 reduce를 쓰게 됨!

// 고급함수 쓰면 ? 커스터마이징 가능!

const arr = [1, 2, 3, 4, 5];
const result1 = arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0);
console.log(result1); // 15

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 10);
console.log(result2); // 25

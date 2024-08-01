//사용자 이름 출력 예제 
const userName = prompt("이름을 입력해주세요!");
const userAge = prompt("나이를 입력해주세요!");
const userOccupation = prompt("직업을 입력해주세요!");

if (userName && userAge && userOccupation) {
  const message = `${userAge}세 ${userOccupation} ${userName}님 환영합니다!`;
  alert(message);
} else {
  alert("모든 입력란을 채워주세요!");
}

// for 문 연습예제 1 과일 종류 콘솔창에 나열하기
// const fruits = ["apple", "banana", "cherry", "date"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for 문 연습예제 2 2차원 배열 모든 요소 나열하기
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

// for 무누 연습예제 3 문자열 문자수 세어보기
// const str = "hello world";
// const charCount = {};

// for (let i = 0; i < str.length; i++) {
//   const char = str[i];
//   charCount[char] = (charCount[char] || 0) + 1;
// }

// console.log(charCount);
// { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// for 문 연습예제 4 피보나치 수열 생성해보기

// const n = 10;
// const fibonacci = [0, 1];

// for (let i = 2; i < n; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// console.log(fibonacci);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// for 문 연습예제 5 실생활 - 이메일 도메인 추출하기
// const emails = [
//   "alice@example.com",
//   "bob@example.org",
//   "carol@example.net"
// ];

// for (let i = 0; i < emails.length; i++) {
//   const domain = emails[i].split("@")[1];
//   console.log(domain);
// }
// example.com
// example.org
// example.net

// for 문 연습예제 6 실생활- 일일 온도 데이터 분석하기
// const temperatures = [22, 25, 21, 19, 23, 26, 24];

// let maxTemp = temperatures[0];
// let minTemp = temperatures[0];

// for (let i = 1; i < temperatures.length; i++) {
//   if (temperatures[i] > maxTemp) {
//     maxTemp = temperatures[i];
//   }
//   if (temperatures[i] < minTemp) {
//     minTemp = temperatures[i];
//   }
// }

// console.log(`최고 온도: ${maxTemp}`);
// console.log(`최저 온도: ${minTemp}`);

// for 문 연습예제 7 실생화로 - 데이터를 바 형태로 시각화
// const data = [5, 10, 15, 20, 25];

// for (let i = 0; i < data.length; i++) {
//   console.log("█".repeat(data[i]));
// }

// for ... in 문 연습예제
// const person = {
//   name: "Daeun",
//   age: 30,
//   occupation: "Prontend developer",
// };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// for ... in 문 연습예제2
// const settings = {
//   theme: "light",
//   language: "en",
//   notifications: true
// };

// for (const key in settings) {
//   if (settings.hasOwnProperty(key)) {
//     settings[key] = "updated";
//   }
// }

// console.log(settings); // { theme: "updated", language: "updated", notifications: "updated" }

// for ... in 문 연습예제 3
// const product = {
//   id: 101,
//   name: "Laptop",
//   price: 1200
// };

// const keys = [];
// for (const key in product) {
//   if (product.hasOwnProperty(key)) {
//     keys.push(key);
//   }
// }

// console.log(keys); // ["id", "name", "price"]

// let pets = ["dog", "cat", "mouse"];
// // "" : 형변환 장치 문자아님!!;
// pets[0] = "hamster"; // dog가 hamster로 바뀜
// // 접근이 가능하면 제어가 가능하다. 배열값 수정!
// console.log(pets);

// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// **********배열에서 값을 수정하는 방법!!**********
// (ex)
// let pets = ["dog", "cat", "mouse"];
// // "" : 형변환 장치 문자아님!!;
// pets[0] = "hamster"; // dog가 hamster로 바뀜
// // 접근이 가능하면 제어가 가능하다. 배열값 수정!
// console.log(pets);

// //배열 => 이터러블 객체
// // 이ㅓㅌ레이터 요소!
// // 제너레이터 // map & set

// 반복문

// for // for of // forEach

//for of문 예시
// const colors = ["red", "green", "blue", "white", "black"];

// for (let color of colors) {

// }

// colors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);
// });
// 3번째 인자값은 배열 그 자체를 의미(ex.colors) array 써도되고 jjanggu써도되지만 직관적으로 쓰기!

// colors.forEach((color, index, array) => {
//   console.log(`[${array}][${index}] : ${color}`);
// });

// const vegitable = ["양상추", "토마토", "피클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];
// const meatBurger = vegitable.concat(meat, "빵");
// console.log(meatBurger);

// // 전개연산자
// const cheeseBurger = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger);

// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse()); // reverse()함수는 데칼코마니처럼 원래 순서를 뒤바꿀 수 있음

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// console.log(week);
// console.log(week.sort());

// console.log(values);
// console.log(values.sort());

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });

// console.log(values);

// values.sort((a, b) => {
//   return a - b;
// });

// console.log(values);

// 뒤에있는 값을 제거하고 싶을 때! pop
// let animals = ["lion", "bear", "bird"];

// console.log(animals);
// // (3) ['lion', 'bear', 'bird']

// animals.pop();

// console.log(animals);
// // (2) ['lion', 'bear']

// animals.push("tiger");

// console.log(animals);
// // (3) ['lion', 'bear', 'tiger']

// let fruits = ["apple", "pear", "banana"];
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("cherry");

// console.log(fruits);

let subjects = ["html", "css", "javascript", "react", "typescript"];

// console.log(subjects.splice(2));

let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

console.log(week.splice(1, 5, "holiday")); // 첫번째 인자값은 인덱스, 두번째 인자값은 갯수를 의미하기때문에 fri가 나오는 것
// "mon", "tue", "wed", "thu", "fri", 자리 안에 holiday가 들어가고 마지막sat이 출력되어서 콘솔창에 sun, holiday, sat이 되는 것임
//값은 안 지우고 싶은데 추가 내용을 떨구고 싶을 때 사용
console.log(week.splice(4, 0, "holiday"));
console.log(week);
// splice는 원본 데이터 값을 날리기 때문에 조심하여 사용해야함

let colors = ["red", "green", "blue", "white", "black"];

console.log(colors.slice(2));
console.log(colors.slice(1, 4));

console.log(colors);
//원본데이터에 리스크는 없음

// const str = "hello Sir";
// const arr = ["today", "first", "theday"];

// console.log(str.length);
// // console.log(arr.length);

// // (1) 특정위치의 문자에 접근하고자 할 때! : charAt(위치)

// console.log(str.charAt(4));

// const counting = (string, word) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === word) count += 1;
//   }
//   return count;
// };

// const string = prompt("원하는 문자열을 입력하세요");
// const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");
// const result = counting(string, word);

// document.write(`${string}문자열에는 ${word}라는 알파벳이 ${result}번 사용되었습니다`);

// (2) indexOf : 특정 문자열을 인자값으로 제공하고, 해당 문자열이 시작되는 인덱스 값을 찾아옴.

// const str1 = "Good morning, everyone. Wonderful morning";
// console.log(str1.indexOf("morning"));

// let firstIndex = str1.indexOf("morning");
// let secondIndex = str1.indexOf("morning", firstIndex + 1);
// let thirdIndex = str1.indexOf("morning", secondIndex + 1);
// console.log(thirdIndex);

// (3) 특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있거나
// startWitjh() // endWith() // includes()
// 상기의 해당 조건에 부합하는지 여부를 체크할 때 주로 사용
// 조건에 부합하면 true // 부합하지 않으면 false

// const str2 = "Hello, everyone.";
// console.log(str2.startsWith("Hello")); //true
// console.log(str2.startsWith("hello")); //false
// console.log(str2.startsWith("He")); //true
// console.log(str2.startsWith("Hello, ev")); //true

// console.log(str2.startsWith("el", 1)); //true
// console.log(str2.startsWith("o", 4)); //true

// console.log(str2.endsWith("everyone.")); //true
// console.log(str2.endsWith("Everyone.")); //false
// console.log(str2.endsWith("one.")); //true

//ES6 이전 문법
// console.log(str2.indexOf("every") !== -1); //true
// console.log(str2.indexOf("every") === 5); //false

// console.log(str2.includes("every")); //true

// 3번 예제
// let str3 = " ab cd ef ";

// //앞과 뒤의 공백을 없애는 함수
// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// const str2 = "Hello, everyone.";
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// 문자열에서 특정 문자를 추출하는 방법!
// 사용자가 올바르지 않은 정보값 넣었을 때

// const str2 = "Good morning.";
// console.log(str2.length);

// // console.log(str2.substring(5)); //morning
// console.log(str2.substring(0, 4)); //Good
// console.log(str2); // Good morning

// console.log(str2.slice(0, 4)); //Good
// console.log(str2);
// // slice 는 뒤에나온 문법임 : 업그레이드 기능 : 음수값을 사용할 수 있음
// console.log(str2.slice(-5, 12));

// 구분자 역할을 하는 split()함수
// 이메일 abcd@naver.com

const str5 = "Hello everyone";
console.log(str5.split(" ")); //한칸 띄워서 
console.log(str5.split("")); //문자 그 자체 인식

//빈 공간 쪼갤때 배열로 인식시킨다.

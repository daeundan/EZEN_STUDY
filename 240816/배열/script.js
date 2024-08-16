// const str5 = "Hello, everyone";
// // const arr5 = str5.split("");
// const array5 = [...str5]; // 문자열을 배열로 바꾸어주는 목적만 지님
// const str6 = array5.join("");

// console.log(array5);
// console.log(str6);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요");

// // const firstCh = string[0].toUpperCase();
// // const remainStr = string.slice(1);
// // const result = firstCh + remainStr;

// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// document.write(result);

// 배열 만드는 방법

// 1
let arr = new Array();

arr[0] = "first";
arr[1] = "second";

console.log(arr);

// 1. 생성자 함수 활용 - 정석

let obj = new Object();

obj[1] = "dog";
obj[2] = "cat";

console.log(obj);

// 2. 빈배열 활용 - 정석 외적
let season = [];

season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";

console.log(season);

// 3. 직접 배열 선언 //할당
const pats = ["dog", "cat", "lion"];
console.log(pets);

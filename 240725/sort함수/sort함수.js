const output = document.querySelector("#output");
console.log(output);

const arr = [2, 1, 3, 4, 6, 8, 7, 10, 9, 5];

// arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a === b) {
//     return 0;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

arr.sort((a, b) => b - a);
// 표현식문

// arr.sort((a, b) => {
//   return b - a;
// });

// const arr1 = arr.map((item) => item * 2);

output.innerText = arr;

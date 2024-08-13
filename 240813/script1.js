// // 객체 생성 = 객체 선언

// const book1 = {
//   title: "자바스크립트",
//   level: "normal",
//   study: "done",
// };

// // 객체 선언 후 객체 안 데이터를 찾아온다.
// // property에 접근

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";
// // 객체 안 요소 수정

// console.log(book1);

// book1.master = "David";

// console.log(book1 );

// let book2 = new Object();
// console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "박세진";
// book2.bestSeller = "Yes";

// console.log(book2);

// let book3 = new Array();
// console.log(typeof book3);

// 객체안의 값을 삭제

// let book2 = new Object();
// console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "박세진";
// book2.bestSeller = "Yes";

// console.log(book2);

// delete book2.bestSeller;
// console.log(book2);

// 객체 중첩 - 객체안의 객체
// const student = {
//   name: "전진우",
//   age: 20,
//   favorite: "game",
//   score: {
//     history: 85,
//     science: 90,
//     average: () => {
//       return (student.score.history + student.score.science) / 2;
//     },
//   },
// };

// function // 화살표 함수인 경우 현재 이벤트가 발생되거나 현재 실행되고있는 직계 부모요소를 찾아오지 못함
// 호이스팅이 안되기 때문. 그렇기 때문에 sudent.score.history 라고 쓰는 것

// const student = {
//   name: "전진우",
//   age: 20,
//   favorite: "game",
//   score: {
//     history: 85,
//     science: 90,
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//     like() {
//       alert(`전진우 님은 컴퓨터를 좋아합니다!`);
//     },
//   },
// };

// console.log(student.score.history);
// console.log(student.score.average());

// // 객체 안 property 일부로 탄생된 함수 = method 라고 칭함.

// student.score.like();

// const window = {
//   document: {
//     html: {
//       head: {
//         meta: "a",
//         link: "./",
//       },
//       body: {
//         h1: "안녕하세요 ",
//         p: "반갑습니다",
//       },
//     },
//   },
//   alert() {

//   }
//   prompt() {

//   }
//   scrollY: {

//   }
// };

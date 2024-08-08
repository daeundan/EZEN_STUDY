// 만보걷기, 취미, 운동 등
// 사용자에게 특정 날짜를 받는다
// 몇일날 했는지 체크

const userQuestion = prompt(
  "디데이를 계산하고 싶은 날짜를 입력해주세요!",
  "ex.2024-06-14"
); // 입력창 만들기

const result = document.querySelector("#result");

const today = new Date(); //현시점 날짜정보
const firstDay = new Date(userQuestion); // 사용자 입력한 날짜정보

const passedTime = today.getTime() - firstDay.getTime(); // 자동으로 밀리초 계산이 되지만 웬만하면 getTime을 쓰는 습관 들일 것
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000)); // passedTime 처음 시작 날짜 -  밀리초로 변환되는 것 하루 24시간 60분 60초 1초

result.innerText = passedDate;

// // script3.js
// document.addEventListener("DOMContentLoaded", () => {
//   // 날짜 입력 받기
//   const inputDate = prompt("시작한 날짜를 입력하세요! (YYYY-MM-DD 형식):");

//   // 현재 날짜와 입력받은 날짜를 Date 객체로 변환
//   const startDate = new Date(inputDate);
//   const currentDate = new Date();

//   // 날짜 차이를 밀리초 단위로 계산
//   const timeDifference = currentDate - startDate;

//   // 날짜 차이를 일 단위로 변환
//   const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   // 새로운 span 요소 생성
//   const dayCountSpan = document.createElement("span");
//   dayCountSpan.style.color = "red";
//   dayCountSpan.style.fontSize = "30px";
//   dayCountSpan.textContent = `${dayDifference}`;

//   // body 요소 참조
//   const body = document.body;

//   // 기존 span 요소를 찾아서 그 앞에 새로운 span 요소 삽입
//   const existingSpan = body.querySelector("span");
//   body.insertBefore(dayCountSpan, existingSpan);
// });

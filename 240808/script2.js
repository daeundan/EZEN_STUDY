const accent = document.querySelector(".accent");
const date100 = document.querySelector("#date100");

const now = new Date();
const firstDay = new Date("2022-04-23");

const toNow = now.getTime();
const toFirst = firstDay.getTime();

const passedTime = toNow - toFirst;
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `${passedDate}일`;

// console.log(passedDate);

// D - 100
let future = toFirst + 100 * (24 * 60 * 60 * 1000);
let someday = new Date(future);
let year = someday.getFullYear();
let month = someday.getMonth() + 1;
let date = someday.getDate();
date100.innerText = `${year}년 ${month}월 ${date}일`;

calcDate(100);
calcDate(800);
calcDate(900);
calcDate(1000);

function clacDate(days) {
  future = toFirst + days * (24 * 60 * 60 * 1000);
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  date = someday.getDate();
  document.querySelector(
    `date${days}`
  ).innerText = `${year}년 ${month}월 ${day}일`;
}

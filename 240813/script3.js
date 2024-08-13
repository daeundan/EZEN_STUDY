// const newBook1 = {
//   title: "당신이 누군가를 죽였다",
//   author: "히가시노 게이고",
//   price: 17820,
//   category: "미스터리 스릴러",
// };

// 생성자 함수 - 인스턴스 객체 만들기

function Book(title, authour, price, category) {
  this.title = title;
  this.authour = authour;
  this.price = price;
  this.category = category;
}

const book1 = new Book(
  "당신이 누군가를 죽였다",
  "히가시노 게이고",
  "17820",
  "미스터리 스릴러"
);

console.log(book1);

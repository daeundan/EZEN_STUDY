// 예제 1번

// function Book(title, price) {
//   this.title = title;
//   this.price = price;
// }

// Book.prototype.buy = function () {
//   console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
// };

// const book1 = new Book("자바스크립트", 10000);
// book1.buy();

// function Textbook(title, price, major) {
//   Book.call(this, title, price);
//   this.major = major;
// }

// Textbook.prototype.buyTextbook = function () {
//   console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다!`);
// };

// Object.setPrototypeOf(Textbook.prototype, Book.prototype);

// const book2 = new Textbook("타입스크립트", 20000, "컴퓨터공학");

// // console.log(book2);

// book2.buyTextbook();
// book2.buy();

// // extends
// // implement (*TS) : 특정 값을 상속 받는다면 반드시! 필수적으로! 상속받은 값을 사용해야 함.

// class BookC {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }

//   buy() {
//     console.log(`${this.title}을 ${this.price}원에 구매하였습니당`);
//   }
// }

// const book3 = new BookC("자료구조", 10000);
// book3.buy();

// class Textbookc extends BookC {
//   constructor(title, price, major) {
//     super(title, price);
//     this.major = major;
//   }

//   buyTextbook() {
//     console.log(`${this.major} 전공서적, ${this.title}을(를) 구매했어요`);
//   }
// }

// const book4 = new Textbookc("알고리즘", 5000, "컴퓨터공학");
// book4.buyTextbook();
// book4.buy();

// 예제 2번

class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    alert(`${this.name} is running`);
  }
}

const cheez = new Pet("치즈", "yellow");
// cheez.run();

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  viewInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.breed}, 색상 ${this.color}`);
  }
}

const bori = new Cat("보리", "흰색", "브리티시 숏헤어");
bori.viewInfo();

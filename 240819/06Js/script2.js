// 1. 매개변수 기본값
const hello = (name, message = "안녕하세요!") => {
  console.log(`${name}님 ${message}`);
};

hello("원빈", "반갑습니다");
hello("현빈");

// 2. 전개 연산자

// 1) 함수의 매개변수
// const addNum = (num01, num02) => {
//   const result = num01 + num02;

//   return result;
// };

// console.log(addNum(1, 2, 3, 4, 5));

// 위내용을 재활용이 가능한 코드로 바꾼 것! 이터러블 객체
const addNum = (...numbers) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3));
console.log(addNum(1, 2, 3, 4, 5));

// 2) 참조타입 변수값의 독립화
const fruits = ["apple", "banan", "cherry"];
const favorite = [...fruits];

favorite[1] = "grape";

console.log(fruits, favorite);

// 3) 서로 다른 배열을 하나로 병합
const animal = ["bird", "cat"];
const fruits01 = ["melon", "fineapple"];

console.log(animal.concat(fruits01));
console.log([...animal, ...fruits01]);

// 3. 객체 key 접근 방법
// 대괄호 표기법

const book = {
  title: "Javascript",
  pages: 500,
};

book.published = "2024-08-19";

console.log(book); //온점 표기법
console.log(book["title"]); //대괄호 표기법 객체의 키를 문자열에 포함시키면 됨

// 객체 키 생성 방법

const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수 키",
  [`${add(10, 20)} key`]: "게산 키",
};

console.log(obj);

// 객체 축약법

let user = {
  name: "슛돌이",
};

user.age = 25;

console.log(user);

// 객체 선언 시 , key 네이밍 == value 값으로 할당하고자 하는 매개변수의 이름이 동일한 경우!
// key 와 value 가 동일하기 때문에 한번만 써도됨. (name: name, age: age, 안써도 됨!)

const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

const user1 = makeUser("영심이", "255세");

console.log(user1);

// 객체에 심볼키를 사용하는 방법 (ES6 이후 문법)
// 유일무이한 자료를 생성하고자 할때 사용됨

let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2);

const id = Symbol("id");
const tel = Symbol("telephone number");
// 문자열에 라벨(telephone number)을 붙였기 때문에 콘솔 창에도 이대로 뜨게됨!

// 객체의 Key 도 결국엔 변수이기 때문
const member = {
  name: "chloe_lim",
  age: 32,
  [id]: "ekdms534",
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
};

//윗쪽에서 심볼을 통해 생성된 값(id) 가져올 경우엔 []써야됨
console.log(member);
//콘솔창에 => {name: 'chloe_lim', age: 32, Symbol(id): 'ekdms534', Symbol(telephone number): ƒ}

//for in 문 사용시에는 심볼 출력하지 않음
// 심볼은 객체 안에 있는 Key 값을 은폐하고 싶을 때에도 사용가능
for (let item in member) {
  console.log(`${item}`);
}
// 밑에 콘솔 모양 잘 기억할것!~
console.log(member[id]);
// console.log(member[tel]());

// 구조분해 할당 = 리엑트라는 라이브러리에서 안쓰면 피봄
// 리엑트는 자바스크립트를 컴포넌트화 함 - 함수형 컴포넌트 형식을 띄고 있음
// 페이스북이 리엑트 라이브러리 2015년도에 만들었을 땐 함수형 컴포넌트 아닌 클래스형 컴포넌트 였음
// 만약 지금 클래스형 컴포넌트였으면 클래스를 빡세게 들어가야 되었을 듯.
// 앞으로는 클래스형 컴포넌트 쓰지 말라고 권고함 - 함수를 통해 데이터를 받아오고 그 데이터로 컴포넌트 기능을 구현하는게 더 효율적이라 생각하였기 때문
// 컴포넌트와 컴포넌트 사이에 데이터 가져오는 경우가 많음 - 여기서 구조분해 할당이 이루어지는 것임!

// 밑에게 클래스 컴포넌트임 - 비효율적으로 값을 찾아오는 상황 발생
// const fruits02 = ["사과", "복숭아"];

// const apple = fruits02[0];
// const peach = fruits02[1];

// console.log(apple, peach);

// 값을 분해하고자 하는 원본 데이터의 자료 형태를 따라가야함
// 값을 할당받아야하는 것들은 배열의 형태로 받아오기
// 그다음 값을 받아올 것을 써주는 것

// 구조분해할당으로 쓴 것
const fruits02 = ["사과", "복숭아"];

const [apple, peach] = fruits02; // 객체가 아닌 배열이기 때문에 대괄호로 가져오는 것! []
// 배열은 왼쪽으로부터 일겅짐.

console.log(apple, peach);

// (4) 구조분해 할당시 전개연산자 구문 사용
let [teacher, ...students] = ["Lim", "Lee", "Won", "Jun"];

console.log(teacher, students);
//4. 전개연산자를 사용하면 구조분해할당을 할 때에도 사용할 수 있음

const member03 = {
  name: "David",
  age: 20,
};

const { name: userName, age } = member03;
console.log(userName, age);

// 5. 배열 메서드
// 그중 강려크한 메서드 : map, filter, reduce
// map : 배열 안에 있는 아이템(*요소)들에게 특정 함수 안에 있는 기능을 동일하게 실행 및 적용시킴
// 그 뒤 새로운 배열로 다시 생성해줌 => forEach 와 차이점(forEach는 원래 배열을 통으로 실행시킬 뿐)

// JS ES6 에 혼종이 태어남 (과도한 욕심아닌가)
// map & set
// 배열 & 객체
// 배열 : 인덱스 // 개수 // 넣고, 빼고 가능
// 객체 : 프로퍼티 형태 (*어떤 자료가 무슨 의미인지 확인 가능)
// 배열과 객체의 장점을 결합한 울버린 = 맵 map

// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini");

console.log(myCup);

// 콘솔창!!
//
// 0: {"color" => "white"}
// 1: {"material" => "ceramic"}
// 2: {"capacity" => "300ml"}

//배열이 갖지못하는 key 와 value의 값을 부여해주는 느낌이 듦

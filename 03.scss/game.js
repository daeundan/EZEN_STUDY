// 끝말잇기 게임

// 1. 제시어의 끝단어 확인
// 1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함.
// 1-2. 3-1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야 함.

// 2. 끝단어로 시작하는 단어를 입력
// 2-1. 사용자가 입력한 단어 무엇인지를 알아야함!
// 2-2. 끝단어로 ㅅ작하느 단어 == 사용자가 입력한 단어

// 3. 단어 입력 후 입력 버튼
// 3-1. 입력버튼이 클릭 => 검증 (*이벤트)

// 4. 문제 여부 판단 => 문제 없다! 문제 있다!
// 4-1. 조건에 따라서 값을 어떻게 출력

// const button = document.querySelector(".search");

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("입력버튼 클릭!");
// });

// const word2 = document.querySelector("#word");
// const myword2 = document.querySelector("#myword");

// Word Game 끝말잇기 게임
const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
    document.querySelector("#myword").value = "";
  }
};

const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);

// lotto Game 로또 게임

// 1~45까지의 6개 숫자가 중복 없이 랜덤으로 동시에 추출되어야 함.
// 1. 클릭! 버튼이 무엇인지 컴퓨터에게 알려줘야 함.
// 2. 클릭! 버튼 클릭시, 숫자가 생성되어야 함. (*이벤트 대상, 촉매제)
// 3. JS > 내장 객체 > 숫자를 랜덤으로 생성해주는 함수가 있음.
// 3-1. random이라는 함수! => 0부터 1미만의 실수를 난수의 형태로 생성해야함!
// 0.9999999999999999 * 45 || 44
// *실수= 소숫점을 갖고있는 숫자 / *정수 = 소숫점 없는 숫자 / *난수 = 규칙성없이 숫자들을 생성해줌
// (* 소숫점을 없애야 할 필요가 있음 함수 사용 (1) : floor()=> 소숫점 버림 // (2) ceil() => 소숫점 올림 // (3) round() => 소숫점 반올림 )
// 4. 중복X
// 4-1. set() 클래스 함수 사용. => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정 => 만약 중복된 값이 생성되는 경우, 1개로 합쳐줌.
// 4-2. 6개 숫자 완성 => 2번째 & 4번째 숫자가 같은 경우 조건식을 주어야함.
// 조건문 => 재추첨을 하겠습니다!

const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

// const lottoNumber = 6;
// const lottoCount = 44;

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  }
  if (myNumber.size === digitCount) {
    // Set 객체를 배열로 변환한 후, 정렬합니다.
    let sortedNumbers = [...myNumber].sort((a, b) => a - b);
    result.innerText = `${sortedNumbers}`;
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoButton.addEventListener("click", startLotto);

const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const yourChoice = document.querySelector(".your-choice");
const winner = document.querySelector(".result");

const result = ["가위✌🏻", "바위👊🏾", "보✋🏿"];

let message = "";

const show = (user, computer, message) => {
  console.log(message);
  computerChoice.innerText = computer;
  yourChoice.innerText = user;
  winner.style.cssText = "color: white; font-family: 'Ramche', sans-serif;";
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) message = `무승부입니다.`;
  else {
    switch (user + computer) {
      case `가위✌🏻보✋🏿`:
      case `바위👊🏾가위✋🏿`:
      case `보✋🏿바위👊🏾`:
        message = `오, 당신이 이겼어요!`;
        break;
      case `가위✌🏻바위👊🏾`:
      case `바위👊🏾보✋🏿`:
      case `보✋🏿가위✌🏻`:
        message = `이런, 컴퓨터가 이겼어요!`;
        break;
    }
  }
  //   console.log(message);

  show(user, computer, message); //출력할 준비
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});

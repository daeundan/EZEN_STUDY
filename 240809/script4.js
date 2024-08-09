document.write(`<h1>✌🏻👊🏼✋🏿 컴퓨터랑 가위. 바위. 보 게임 하기 ✌🏻👊🏼✋🏿</h1>`);

const game = prompt("가위. 바위. 보 중 선택하세요", "가위");
let gameNum = "";

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 입력하셨어요!");
    location.reload();
}

const com = Math.ceil(Math.random() * 3);
document.write(`<img src= "./game/math_img_${com}.png">`);

if (gameNum === com) { document.write(`컴퓨터와 비겼습니다`);
else document.write(`컴퓨터가 이겼습니다.`);
}
else if(gameNum < com) {
    document.write(`컴퓨터가 졌습니다.`)}

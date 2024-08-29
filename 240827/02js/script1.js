const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.beginPath(); //지금부터 드로잉할 거다
// ctx.moveTo(50, 50); // 어디서 시작할지
// ctx.lineTo(200, 200); //직선 :선의 종류
// ctx.closePath();
// ctx.stroke(); // 선

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgba(0, 200, 0";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgba(0, 170, 0";
ctx.fill();

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 원 or 호!
// arc(x, y, r, startAngle, endAngle, counterClockwise) 6개의 인자값

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fillStyle = "yellow";
// ctx.globalAlpha = "0.5";
// ctx.fill();
// ctx.fillReact(30, 200, 150, 150);

ctx.beginPath();
ctx.arc(120, 100, 50, 0, Math.PI, true);
ctx.closePath();
ctx.fillStyle = "dodgerblue";
ctx.fill();
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI, false);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
ctx.closePath();
ctx.stroke();

// 별

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "yellow";

ctx.moveTo(100, 50);
ctx.lineTo(350, 250);
ctx.stroke();

ctx.lineTo(50, 250);
ctx.stroke();

ctx.lineTo(300, 50);
ctx.stroke();

ctx.lineTo(200, 350);
ctx.stroke();

ctx.lineTo(100, 50);
ctx.stroke();

ctx.closePath();
ctx.fill();

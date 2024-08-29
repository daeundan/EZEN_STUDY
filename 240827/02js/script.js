const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(200, 0, 0)";
ctx.strokeStyle = "rgb(0,0,0)";

ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 20, 200, 100);

ctx.fillstyle = "rgb(0, 0, 200)";
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45);

// ctx.fillStyle = "rgba(252,70,107,1)";
// ctx.fillRect(10, 10, 50, 100);
// ctx.rotate = "60deg";
// ctx.strokeRect(10, 10, 500, 500); // 윤곽선
// ctx.clearRect(10, 10, 500, 500); // 지우기
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 90, 50, 100);
// ctx.quadraticCurveTo(50, 120, 40, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();

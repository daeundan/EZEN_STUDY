const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";

ctx.beginPath();
ctx.arc(250, 300, 170, 0, (Math.PI * 2) / 2, true);
ctx.stroke();
ctx.fillStyle = "rgb(113,66,72)";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 250, 100, 0, Math.PI * 2, false);
ctx.fillStyle = "rgb(254,193,176)";
ctx.fill();
ctx.strokeStyle = "rgb(113,66,72)";
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 210, 120, 0, (Math.PI * 2) / 2, true);
ctx.stroke();
ctx.fillStyle = "rgb(113,66,72)";
ctx.fill();

// ctx.beginPath();
// ctx.arc(215, 230, 25, 0, Math.PI * 2, true);
// ctx.stroke();
// ctx.fillStyle = "white";
// ctx.fill();

ctx.beginPath();
ctx.arc(220, 230, 15, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

// ctx.beginPath();
// ctx.arc(290, 230, 25, 0, Math.PI * 2, true);
// ctx.stroke();
// ctx.fillStyle = "white";
// ctx.fill();

ctx.beginPath();
ctx.arc(285, 230, 15, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 270, 55, 0, (Math.PI * 2) / 2, false);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

// ctx.beginPath();
// ctx.arc(250, 325, 40, 0, (Math.PI * 2) / 2, true);
// ctx.stroke();
// ctx.fillStyle = "white";
// ctx.fill();
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(265, 270, 10, 0, (Math.PI * 2) / 2, false);
// ctx.stroke();
// ctx.fillStyle = "white";
// ctx.fill();
// ctx.fill();
// ctx.closePath();

ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, MathPI * 2);
ctx.closePath();
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.ellipse(150, 200, 80, 50);

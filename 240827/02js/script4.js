const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 2차 베지에 곡선

// quadracticCurveTo(cpx, cpy, x, y);
// 인자값 조절점

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// // ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.quadraticCurveTo(400, 150, 450, 100);
// ctx.quadraticCurveTo(500, 50, 550, 100);
// ctx.quadraticCurveTo(600, 150, 650, 100);

// ctx.quadraticCurveTo(700, 50, 750, 100);
// ctx.quadraticCurveTo(800, 150, 850, 100);
// ctx.quadraticCurveTo(900, 50, 950, 100);
// ctx.quadraticCurveTo(1000, 150, 1050, 100);
// ctx.quadraticCurveTo(1100, 50, 1150, 100);
// ctx.quadraticCurveTo(1200, 150, 1250, 100);
// ctx.stroke();

// 3차 베지에 곡선
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(0, 300, 210, 160, 380, 68);
// ctx.strokeStyle = "white";
// // ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 70);
// ctx.bezierCurveTo(20, 270, 210, 130, 360, 80);
// ctx.strokeStyle = "white";
// ctx.stroke();
// ctx.closePath();

let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.moveTo(300, 100);
triangle.moveTo(200, 260);
triangle.closePath();

ctx.stroke(triangle);

let circle = new Path2D();
ctx.fillStyle = "green";
ctx.fill(circle);

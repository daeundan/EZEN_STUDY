const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.scale(1, 0.7);
ctx.arc(150, 150, 120, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(50, 160, 70, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 160, 70, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(120, 40, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(180, 40, 30, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "white";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(120, 40, 20, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(180, 40, 20, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(180, 32, 10, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "white";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(120, 32, 10, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "white";
ctx.fill();

// smlie
ctx.beginPath();
ctx.arc(150, 120, 50, 0, (Math.PI * 2) / 2, false);
ctx.closePath();

ctx.fillStyle = "crimson";
ctx.strokeStyle = "crimson";
ctx.fill();
ctx.stroke();

const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
console.log(circle);
const buttonAll = document.querySelectorAll("a");
// const circle = document.querySelector(".circle")

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};

loop();

buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.5)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

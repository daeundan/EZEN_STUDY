const ul = document.querySelector("ul");

const grid = [9, 3];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

for (let i = 0; i < 27; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

// anime({
//   targets: "li",
//   scale: 1.5,
//   translateY: 500,
//   delay: stagger(100),
//   loop: true,
//   opacity: 1,
//   duration: 2000,
// });

anime({
  targets: "li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([1.5, 2], { grid: [9, 3], from: "center", axis: "z" }),
  loop: true,
  rotate: 360,
  opacity: anime.stagger([1, 0.5, 0.5, 1]),
});

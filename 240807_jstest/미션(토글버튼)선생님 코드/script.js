const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const nav = document.querySelector("nav");
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

// document.addEventListener("DOMContentLoaded", function () {
//   const toggleBtn = document.querySelector("#btn");
//   const navItem = document.querySelector("#nav");

//   toggleBtn.addEventListener("click", function () {
//     toggleBtn.classList.btn("active");
//   });
// });

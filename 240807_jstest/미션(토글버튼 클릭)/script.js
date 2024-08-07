document.addEventListener("DOMContentLoaded", function () {
  const toggleIcon = document.querySelector(".toggle_icon");
  const toggle = document.querySelector(".toggle");

  toggleIcon.addEventListener("click", function () {
    toggle.classList.toggle("show");
  });
});

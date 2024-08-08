const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  window.open("./notice.html", "popup", "width=600 height=500");
});

// btn.addEventListener("click", () => {
//   window.open("경로", "팝업이름", "팝업창 옵션")
// });

// 옵션 : 현재 보여지는 화면에서 어느정도 떨어지게 할 것인지, 어떤 너비와 높이 값 가질 것인지 너비/높이/좌우측

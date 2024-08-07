// 1. 각 텍스트에 마우스를 올린다.
// - 텍스트를 찾아온다
// - 텍스트는 4개이다.
// - 텍스트들이니 querySelectorALL 사용해야됨
// - forEach 문을 사용한다.
// - addEventListner 를 사용한다.
// - mouseover ||  mouseenter 준다.
// - mouseout || mouseleave 준다.

// 2. 텍스트에 마우스가 올라갈 때마다 이미지가 변경된다.
// - 현재 이미지를 출력하고 있는 Node를 찾아온다.
// - 이미지 해당 Node에서 이미지를 어떻게 출력하는지 확인한다(*background img 속성값을 지님)
// - 어떻게 Node의 속성을 변경할 수 있는지 고민한다.
// - 어떻게 스크립트에서 CSS 속성을 제어할 수 있는지 생각한다.

// 3. 텍스트에서 마우스가 떠나면 원래 상태로 돌아온다.

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem, index) => {
  liItem.addEventListener("mouseenter", function () {
    let changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage})`;
  });
  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});

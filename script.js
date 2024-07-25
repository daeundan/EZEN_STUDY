document.addEventListener("DOMContentLoaded", function () {
  const pic = document.querySelector(".pic");
  const imgs = pic.querySelectorAll("img");

  imgs.forEach((img) => {
    img.addEventListener("click", function () {
      // 클릭된 이미지를 제외한 모든 이미지에서 'active' 클래스를 제거
      imgs.forEach((sibling) => {
        if (sibling !== img) {
          sibling.classList.remove("active");
        }
      });

      // 클릭된 이미지에 'active' 클래스 추가
      this.classList.add("active");

      // 모든 콘텐츠 항목에서 'active' 클래스를 제거
      const desc = document.querySelector(".desc");
      const contents = desc.querySelectorAll(".content");
      contents.forEach((content) => {
        content.classList.remove("active");
      });

      // 클릭된 이미지의 데이터 속성에 해당하는 콘텐츠 항목에 'active' 클래스 추가
      const targetId = img.getAttribute("data-alt");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});


// 슬라이더 기능 추가
const slides = document.querySelector(".slides");
const slideCount = slides.children.length;
let currentIndex = 0;

document.getElementById("next").addEventListener("click", function () {
  if (currentIndex < slideCount - 1) {
    currentIndex++;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

document.getElementById("prev").addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});
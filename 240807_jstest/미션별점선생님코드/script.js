// 중첩 forEach문 사용! switch문으로 별점 부여마다 텍스트 바뀌게 사용!
// 별 5개에 이벤트 부여할 것, 하지만 별의 번호를 비교해야함 전체 별의 갯수 중 현재 선택한 별의 번호를 알아야 구분지을 수 있음.
// 가상 클래스 부여한 것 가져올 것
// 별을 찍는 순간 index 요소 가져옴
// s는 star의 약자 s이고, i는 item 의 i

const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      //s.classList.remove("active");
      //if (i <= index) {
      //   s.classList.add("active");
      // }
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    let message = "";
    //let const var 안쓰고 바로 message 쓰면 전역변수가 됨.
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로예요 :(";
        imageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요 :0";
        imageURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "그냥 그래요 :ㅣ";
        imageURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "마음에 들어요! :)";
        imageURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주 좋아요! :D";
        imageURL = "./img/star-lv5.png";
        break;
    }

    print.innerHTML = `<img src="${imageURL}"> ${message}`;
  });
});

// 사용자가 별 모양의 아이콘을 클릭했을 때 클릭된 별과 그 이전의 별들이 활성화(채워진) 상태가 되도록 하는 JavaScript 코드.

// const stars = document.querySelectorAll(".fa-star");

// fa-star 클래스를 가진 모든 요소를 선택함. stars 변수에 저장함.
// stars.forEach((star, index) => { ... });

// 각 star 요소와 인덱스에 대해 반복 작업을 수행함.
// star.addEventListener("click", () => { ... });

// 각 star 요소에 클릭 이벤트 리스너를 추가함. 클릭 시 콜백 함수 실행함.
// stars.forEach((s, i) => { ... });

// 클릭된 별에 대해 다시 모든 star 요소를 반복함.
// if (i <= index) { ... } else { ... }

// 클릭된 별의 인덱스(index)와 현재 반복 중인 별의 인덱스(i)를 비교함.
// i <= index인 경우 active 클래스 추가함.
// i > index인 경우 active 클래스 제거함.
// s.classList.add("active");

// active 클래스를 추가하여 별을 활성화 상태로 만듦.
// s.classList.remove("active");

// active 클래스를 제거하여 별을 비활성화 상태로 만듦.

// active 클래스를 제거하여 별을 비활성화 상태로 만듦.
// 비활성화 상태는 일반적으로 별이 비어있는(혹은 어두운) 상태를 의미함.
// 이 코드는 결과적으로 사용자가 클릭한 별과 그 이전의 별들을 모두 활성화 상태로 만들고, 클릭한 별 이후의 별들을 비활성화 상태로 만듦.

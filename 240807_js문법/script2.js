const today = new Date();
const hrs = today.getHours();

const container = document.querySelector(".container");
const newImg = document.createElement("img");

newImg.src = hrs < 12 ? "./img/img1.png" : "./img/img2.png";

container.appendChild(newImg);

function updateTime() {
  const now = new Date();
  // 한국 표준시로 변환 (UTC + 9)
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const hours = String(koreaTime.getUTCHours()).padStart(2, "0");
  const minutes = String(koreaTime.getUTCMinutes()).padStart(2, "0");
  const seconds = String(koreaTime.getUTCSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").textContent = `현재 한국 시간: ${timeString}`;
}

// 페이지 로드 시 한 번 시간 업데이트
updateTime();

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

// const today = new Date();
// const hrs = today.getHours();

// const container = document.querySelector(".container");
// const newImg = document.createElement("img");

// newImg.src = hrs < 12 ? "./img/img1.png" : "./img/img2.png";

// container.appendChild(newImg);
// // const srcNode = document.createAttribute("src");

const songs = document.querySelectorAll(".albumTable_song");
for (let song of songs) {
  const play = song.querySelector(".fa-brands");
  const pause = song.querySelector(".fa-solid");
  play.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

// e객체 > target || currentTarget
// currentTarget : 이벤트 헨들러가 부착되어진 요소를 의미!
// target : 실제 이벤트가 발생된 요소를 의미!

// jukebox.js 파일에 다음 내용을 추가하세요

// jukebox.js 파일에 다음 내용을 추가하세요

// 버튼과 오디오 요소 가져오기
const snowFlowerBtn = document.getElementById("snowFlowerBtn");
const lovelyBtn = document.getElementById("lovelyBtn");
const myPersonBtn = document.getElementById("myPersonBtn");
const loveLoveLoveBtn = document.getElementById("loveLoveLoveBtn");
const loverExistsBtn = document.getElementById("loverExistsBtn");

const snowFlowerAudio = document.getElementById("snowFlower");
const lovelyAudio = document.getElementById("lovely");
const myPersonAudio = document.getElementById("myPerson");
const loveLoveLoveAudio = document.getElementById("loveLoveLove");
const loverExistsAudio = document.getElementById("loverExists");

// 이벤트 리스너 추가하여 노래 재생
snowFlowerBtn.addEventListener("click", function () {
  snowFlowerAudio.play();
});

lovelyBtn.addEventListener("click", function () {
  lovelyAudio.play();
});

myPersonBtn.addEventListener("click", function () {
  myPersonAudio.play();
});

loveLoveLoveBtn.addEventListener("click", function () {
  loveLoveLoveAudio.play();
});

loverExistsBtn.addEventListener("click", function () {
  loverExistsAudio.play();
});

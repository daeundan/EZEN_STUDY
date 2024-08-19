const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");

const play = () => {
  playButton.innerText = "⏸";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶️";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  const hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : sec;
  hour = hour < 10 ? `0${hour}` : sec;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
volumeBar.addEventListener("change", setVolume);

// document.querySelector(".full").addEventListener("click", function () {
//   if (!document.fullscreenElement) {
//     document.documentElement.requestFullscreen().catch((err) => {
//       console.error(
//         `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
//       );
//     });
//   } else {
//     document.exitFullscreen();
//   }
// });
const fullScreen = document.querySelector(".full");

fullScreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen()
      .then(() => {
        video.classList.add("fullscreen");
      })
      .catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
        
      });
  } else {
    document.exitFullscreen().then(() => {
      video.classList.remove("fullscreen");
    });
  }
});

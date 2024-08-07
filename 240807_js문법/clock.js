function updateClock() {
  const now = new Date();
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);

  const hours = koreaTime.getUTCHours();
  const minutes = koreaTime.getUTCMinutes();
  const seconds = koreaTime.getUTCSeconds();

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const secondDegrees = seconds * 6;

  document.getElementById("hour").style.transform = `rotate(${hourDegrees}deg)`;
  document.getElementById(
    "minute"
  ).style.transform = `rotate(${minuteDegrees}deg)`;
  document.getElementById(
    "second"
  ).style.transform = `rotate(${secondDegrees}deg)`;
}

// 페이지 로드 시 한 번 시간 업데이트
updateClock();

// 1초마다 시간 업데이트
setInterval(updateClock, 1000);

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

// GeoLocation => 사용자의 위치를 파악하기 위한 목적의 API

// getCurrentPosition() => 사용자의 데이터를 정상적으로 찾아왔을 때에 대한 함수, 사용자의 데이터를 찾아오기 어려울 때의 콜백함수, 위치 파악에 필요한 옵션값(successCB, errerCB. options)받음

const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `현재 위치는 위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}에 있습니다.`;
};

const erroPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, erroPosition);

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      erroPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolacation을 지원하지 않습니다!");
  }
});

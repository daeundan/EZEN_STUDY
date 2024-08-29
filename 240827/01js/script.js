// 사용자의 위치정보 정상적으로 찾았을 때 실행
const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=d%2B5b95uIb8CsaNtkpNaGXLyEuUSfxEYRpsYyzfQoVuepbGwZUdRU%2FR1%2Fc7iJYyKfJSiCV4l4fr1aWjS2X1eg%2FA%3D%3D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      const { latitude, longitude } = position.coords;
      // ---------------카카오 맵 API---------------
      const mapContainer = document.querySelector("#map");
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3, // 숫자가 크면 클 수록 Zoom in, 작을 수록 Zoom out
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);
      // ---------------카카오 맵 API---------------
      // ---------------여러개 마커생성---------------

      // 마커 클러스터러 생성
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

        markers.push(marker);

        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });

        const makeOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };

        const makeOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }

      clusterer.addMarkers(markers);
    });
};
// 사용자의 위치정보 못 찾았을 때 에러 메시지 실행
const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  var x1 = event.offsetX;
  var y1 = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
  } else {
    ctx.lineTo(x1, y1);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); //마우스가 움직일때 onMouseMove 메서드가 작동해라
  canvas.addEventListener("mousedown", startPainting); //마우스를 눌렀을때 startPainting 메서드가 동작해라
  canvas.addEventListener("mouseup", stopPainting); //마우스를 떼었을때 stopPainting 메서드가 동작해라
  canvas.addEventListener("mouseleave", stopPainting); //마우스가 벗어났을때 stopPainting 메서드가 동작해라
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dif = canvas.getBoundingClientRect();
let painting, color, lineWidth, difX, difY;
canvas.addEventListener("mousedown", (e) => {
  difX = e.clientX - dif.left;
  difY = e.clientY - dif.top;
  painting = true;
  color = document.getElementById("color").value;
  lineWidth = document.getElementById("range").value;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (painting) {
    dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
  }
});
canvas.addEventListener("mouseup", (e) => {
  painting = false;
  ctx.closePath();
});
function dibujar(x1, y1, x2, y2) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

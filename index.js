const canvas = document.querySelector("#myCanvas");

// drawClock
const drawClock = () => {
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  drawClockFace(ctx, radius);
  drawNumbers(ctx, radius);
};

const drawClockFace = (ctx, radius) => {
  const grad = ctx.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "#333");
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 15, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
};

function drawNumbers(ctx, radius) {
  ctx.font = `${radius * 0.15}px arial`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (let num = 1; num < 13; num++) {
    const ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 600;
// positions
const topLeft = { x: 0, y: 0 };
const topRight = { x: canvas.height, y: 0 };
const center = { x: canvas.width / 2, y: canvas.height / 2 };
// radius

ctx.translate(center.x, center.y);
const radius = (canvas.height / 2) * 0.9;

drawClock(ctx, radius);

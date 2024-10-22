const canvas = document.querySelector("#myCanvas");

const ctx = canvas.getContext("2d");
canvas.clientHeight;
const topLeft = { x: 0, y: 0 };
const topRight = { x: 200, y: 0 };
const center = { x: 200 / 2, y: 100 / 2 };

// line 1
ctx.moveTo(topLeft.x, topLeft.y);
ctx.lineTo(200, 100);
ctx.stroke();

// line 2
ctx.moveTo(center.x, center.y);
ctx.lineTo(topRight.x, topRight.y);
ctx.stroke();

// circle
ctx.beginPath();
ctx.arc(center.x, center.y, 45, 0, 360, false);
ctx.stroke();

// text
ctx.font = "30px Arial";
ctx.fillText("Hello World", 0, 100);

// stroke text
ctx.strokeText("Hello World", 0, 70);

// gradient
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "green");

// fill with gradient
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 150, 80);

const grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "green");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

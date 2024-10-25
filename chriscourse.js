const canvas = document.querySelector("canvas");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
c.fillStyle = "rgba(255, 0, 0, .8";
c.fillRect(200, 200, 150, 150);
c.fillStyle = "rgba(0, 255, 0, .8";
c.fillRect(300, 400, 150, 150);
c.fillStyle = "rgba(0, 0, 255, .8";

c.fillRect(600, 300, 150, 150);

// line - beginPath, start afresh, not connected to existing
c.beginPath();
// move but don't draw
c.moveTo(50, 300);
// draw line to
c.lineTo(400, 900);
// draw line to
c.lineTo(450, 800);
// set color, opacity, any CSS value
c.strokeStyle = "rgba(130, 240, 130, .99)";
// line width in px I assume
c.lineWidth = 3;
// actually draw the lineTo(s)
c.stroke();

//  arc - circle
c.beginPath();
c.arc(
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerWidth / 20,
  0,
  Math.PI * 2,
  false
);
c.stroke();

for (let i = 0; i < 30000; i++) {
  c.beginPath();
  c.lineWidth = 1;
  const red = Math.random() * 250;
  const green = Math.random() * 255;
  const blue = Math.random() * 150;
  c.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
  c.arc(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight,
    15,
    0,
    Math.PI * 2,
    false
  );
  c.stroke();
}

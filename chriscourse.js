const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const radius = window.innerWidth / 20;

const c = canvas.getContext("2d");
// c.fillStyle = "rgba(255, 0, 0, .8";
// c.fillRect(200, 200, 150, 150);
// c.fillStyle = "rgba(0, 255, 0, .8";
// c.fillRect(300, 400, 150, 150);
// c.fillStyle = "rgba(0, 0, 255, .8";

// c.fillRect(600, 300, 150, 150);

// // line - beginPath, start afresh, not connected to existing
// c.beginPath();
// // move but don't draw
// c.moveTo(50, 300);
// // draw line to
// c.lineTo(400, 900);
// // draw line to
// c.lineTo(450, 800);
// // set color, opacity, any CSS value
// c.strokeStyle = "rgba(130, 240, 130, .99)";
// // line width in px I assume
// c.lineWidth = 3;
// // actually draw the lineTo(s)
// c.stroke();

//  arc - circle
c.beginPath();
c.arc(
  window.innerWidth / 2,
  window.innerHeight / 2,
  radius,
  0,
  Math.PI * 2,
  false
);
c.stroke();

// for (let i = 0; i < 5000; i++) {
//   c.beginPath();
//   c.lineWidth = 1;
//   const red = Math.random() * 255;
//   const green = Math.random() * 255;
//   const blue = Math.random() * 255;
//   const opacity = Math.random() + 0.1;
//   c.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${opacity}
//   )`;
//   c.arc(
//     Math.random() * window.innerWidth,
//     Math.random() * window.innerHeight,
//     15,
//     0,
//     Math.PI * 2,
//     false
//   );
//   c.stroke();
// }

// recursive
// let x = window.innerWidth / 2;

class Circle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
      c.stroke();
    };

    this.update = () => {
      if (this.x + radius > innerWidth || this.x - radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + radius > innerHeight || this.y - radius < 0) {
        this.dy = -this.dy;
      }

      this.x = this.x + this.dx;
      this.y = this.y + this.dy;
    };
  }
}

const circle = new Circle(Math.random() * innerWidth, 200, 10, 10);
circle.draw();

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circle.draw();
  circle.update();
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  x = x + dx;
  y = y + dy;
};

animate();

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
// c.beginPath();
// c.arc(
//   window.innerWidth / 2,
//   window.innerHeight / 2,
//   radius,
//   0,
//   Math.PI * 2,
//   false
// );
// c.stroke();

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

const mouseCoords = { x: undefined, y: undefined };

window.addEventListener("mousemove", (e) => {
  mouseCoords.x = e.x;
  mouseCoords.y = e.y;
});

window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.maxRadius = 100;
    this.red = Math.random() * 255;
    this.green = Math.random() * 255;
    this.blue = Math.random() * 255;
    this.opacity = Math.random() + 0.1;

    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity}
        )`;
      c.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity}
        )`;
      c.fill();
      c.stroke();
    };

    this.update = () => {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x = this.x + this.dx;
      this.y = this.y + this.dy;

      // interactivity
      if (
        Math.abs(mouseCoords.x - this.x) < 100 &&
        Math.abs(mouseCoords.y - this.y) < 100
      ) {
        if (this.radius < this.maxRadius) {
          this.radius = this.radius + 10;
        }
      } else if (
        Math.abs(mouseCoords.x - this.x) > 100 &&
        Math.abs(mouseCoords.y - this.y) > 100
      ) {
        if (this.radius > this.minRadius) this.radius = this.radius - 4;
      }

      this.draw();
    };
  }
}

let circleArray = [];

// create all our circles
// called on first load and on each resize
function init() {
  // must empty circleArray when called in resize, or you end up adding 200 circles on each resize event
  circleArray = [];
  for (let i = 0; i < 200; i++) {
    const radius = (Math.random() + 0.5) * 30;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    const dx = (Math.random() - 0.5) * 8;
    const dy = (Math.random() - 0.5) * 8;

    const circle = new Circle(x, y, dx, dy, radius);
    circleArray.push(circle);
    circle.draw();
  }
}

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (const circle of circleArray) {
    circle.update();
  }
};

init();
animate();

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 0, 0);
}

function draw() {
  background(255);
  ellipse(x, y, 50, 50);
  borders();
}

window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
  let tiltLR = event.gamma;
  let tiltFB = event.beta;
  x += 0.2 * tiltLR;
  y += 0.2 * tiltFB;
}
function borders() {
  if (x >= window.innerWidth - 50) {
    x = window.innerWidth - 50;
  }
  if (x <= 0 &! y >= window.innerHeight + 150 &! y <= window.innerHeight) {
    x = 0;
  }
  if (y <= 0) {
    y = 0;
  }
  if (y >= window.innerHeight + 50) {
    y = window.innerHeight + 50
  }
}
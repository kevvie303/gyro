let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 0, 0);
}

function draw() {
  background(255);
  ellipse(x, y, 50, 50);
}

window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
  let tiltLR = event.gamma;
  let tiltFB = event.beta;

  x += tiltLR;
  y += tiltFB;
}
let x = 50;
let y = 50;
let diameter = 50;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(220);

  // Draw the walls of the maze
  stroke(0);
  strokeWeight(5);

  // Draw the circle
  push();
  fill(255, 0, 0);
  ellipse(x, y, diameter, diameter);
  pop();


}

window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
  let tiltLR = event.gamma;
  let tiltFB = event.beta;

  x += 0.1 * tiltLR;
  y += 0.1 * tiltFB;

  x = constrain(x, diameter / 2, width - diameter / 2);
  y = constrain(y, diameter / 2, height - diameter / 2);
}
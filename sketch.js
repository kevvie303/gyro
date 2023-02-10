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
  rect(100, 100, 300, 300);
  rect(200, 400, 100, 100);
  line(600, 100, 400, 400);

  // Draw the circle
  push();
  fill(255, 0, 0);
  ellipse(x, y, diameter, diameter);
  pop();

  // Check for collision with the walls of the maze
  let collision = false;

  if (collideRectCircle(100, 100, 300, 300, x, y, diameter)) {
    collision = true;
  }

  if (collideRectCircle(200, 400, 100, 100, x, y, diameter)) {
    collision = true;
  }

  if (collideLineCircle(400, 100, 400, 400, x, y, diameter)) {
    collision = true;
  }

  if (collision) {
    x -= tiltLR;
    y -= tiltFB;
  }
}

window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
  let tiltLR = event.gamma;
  let tiltFB = event.beta;

  x += 0.2 * tiltLR;
  y += 0.2 * tiltFB;

  x = constrain(x, diameter / 2, width - diameter / 2);
  y = constrain(y, diameter / 2, height - diameter / 2);
}
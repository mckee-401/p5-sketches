//動く円を大量に生成する

let ballXs = [];
let ballYs = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0, 0, 0);

  for (let i = 0; i < 100; i++) {
    ballXs[i] = width / 2;
    ballYs[i] = height / 2;
  }
}

function draw() {
  background(255, 255, 255);

  for (let i = 0; i < 100; i++) {
    ballXs[i] += random(-10, 10);
    ballYs[i] += random(-10, 10);
  }

  for (let i = 1; i < 100; i++) {
    ellipse(ballXs[i], ballYs[i], 30);
  }
}

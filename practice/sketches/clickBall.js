let ballsize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  fill(0, 255, 255);
  ballsize = 100;
}

function mouseClicked() {
  ballsize = ballsize + 10;
}
function draw() {
  background(255, 255, 255);
  ellipse(300, 300, ballsize, ballsize);
}

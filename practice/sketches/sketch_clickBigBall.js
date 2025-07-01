//クリックすると大きくなる円
let x = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  //strokeWeightが線の太さでstrokeが線の色
  fill(255, 200, 100);
}

function mousePressed() {
  x += 10;
}

function draw() {
  background(255, 255, 255);
  ellipse(300, 300, x, x);
}

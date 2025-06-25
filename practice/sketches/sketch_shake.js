function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0, 0, 0);
}

function draw() {
  background(255, 255, 255);
  ellipse(300 + random(-10, 10), 300 + random(-10, 10), 100, 100);
  //x座標とy座標を少しだけランダムにすることで、震えさせる

  ellipse(400 + random(-10, 10), 400 + random(-10, 10), 100, 100);
}

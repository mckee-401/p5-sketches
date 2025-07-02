function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}

function draw() {
  if (random(0, 100) < 30) {
    fill(0, 0, 0);
  } else {
    fill(255, 255, 255);
  }
  //塗りつぶす色を確率で制御

  ellipse(random(0, 600), random(0, 600), 100, 100);
}

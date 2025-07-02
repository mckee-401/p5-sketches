function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  fill(0);
}

function mouseDragged() {
  ellipse(
    mouseX + random(-10, 10),
    mouseY + random(-10, 10),
    random(1, 10),
    random(1, 10)
  );
}
function draw() {}

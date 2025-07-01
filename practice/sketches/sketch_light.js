//クリックすると明るくなる照明

let light = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//mouseClicked = mousePressed + mouseReleased
function mouseClicked() {
  if (light) {
    light = false;
  } else {
    light = true;
  }
}
function draw() {
  if (light) {
    background(255);
    stroke(255, 255, 200);
    strokeWeight(20);
    fill(255, 200, 100);
  } else {
    background(0);
    noStroke();
    fill(20, 20, 30);
  }

  ellipse(300, 300, 200, 200);
}

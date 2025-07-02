//十字キーで操作できる円

let x = 300;
let y = 300;
//p5.jsはJSなので変数はletとconstしかない
//varとはletの古いバージョン

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  fill(100, 200, 255);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    y += 10;
  } else if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
  }
}
function draw() {
  background(255, 255, 255);
  ellipse(x, y, 50, 50);
}

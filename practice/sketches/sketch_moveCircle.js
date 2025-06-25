let ballX;
let ballY;
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  fill(0, 255, 255);
  ballY = 300;
  ballX = 300;
}

//ボタンを押下した際の処理
function keyPressed() {
  //ボタンはキーコードで管理
  // LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROWを今回は用いる
  if (keyCode == LEFT_ARROW) {
    ballX = ballX - 10;
  } else if (keyCode == RIGHT_ARROW) {
    ballX = ballX + 10;
  } else if (keyCode == UP_ARROW) {
    ballY = ballY - 10;
  } else if (keyCode == DOWN_ARROW) {
    ballY = ballY + 10;
  }
}

function draw() {
  background(255, 255, 255);
  ellipse(ballX, ballY, 50, 50);
}

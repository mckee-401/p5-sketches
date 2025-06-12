function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  // put setup code here
}

//マウスボタンを押したときに実行されるブロック
function mousePressed() {
  //mouseX,mouseYはマウスの座標
  ellipse(mouseX, mouseY, 200, 200);
}

//マウスカーソルが動いたときに実行されるブロック
function mouseMoved() {
  ellipse(mouseX, mouseY, 200, 200);
}

//マウスボタンを離したときに実行されるブロック
function mouseReleased() {
  ellipse(mouseX, mouseY, 200, 200);
}

//マウスをドラッグしているときに実行されるブロック
function mouseDragged() {
  ellipse(mouseX, mouseY, 200, 200);
}

//これでは、早く動かした際に途切れてしまう
function mouseDragged() {
  //図形を書く前に塗と線を設定
  noStroke();
  fill(0);

  ellipse(mouseX, mouseY, 5, 5);
}

//lineを用いて、前の座標から現在の座標まで線を引く
function mouseDragged() {
  //pmouseX,pmouseYは前のマウスの座標
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseDragged() {
  stroke(0, 0, 0);
  line(pmouseX, pmouseY, mouseX, mouseY);

  //Y軸方向に少しずらして線を引く
  stroke(0, 0, 0, 20);
  line(pmouseX, pmouseY + 10, mouseX, mouseY + 10);
}

//XとYを入れ替えると、左右対称の線が書ける
function mouseDragged() {
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 5, 5);

  //XYを入れ替えた線を引く
  fill(0, 0, 255);
  ellipse(mouseY, mouseX, 5, 5);
}

//これ何かに使えそう

//マウスの座標から画面の中心へ線を引く
function mouseDragged() {
  stroke(0, 0, 0);
  line(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
}

function mouseDragged() {
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
  fill(0, mouseX, 255);
}

//これ何かに使えそう

function draw() {
  // put drawing code here
}

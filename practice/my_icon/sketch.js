function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  background(0, 127, 255);

  strokeWeight(8);
  //枠線の太さ変更
  circle(300, 300, 300, 300);
  //円
  fill(255, 255, 255);
  // 白色で塗りつぶし
}

function draw() {
  // put drawing code here

  strokeWeight(1);

  fill(0, 0, 0);

  circle(250, 250, 30, 30);
  //左目
  circle(350, 250, 30, 30);
  //右目
  fill(115, 0, 0);
  noStroke();
  rect(220, 300, 160, 100, 40, 40, 20, 20);
  //座標の後にradius(角を丸める)を指定できる
  //順番はtop-left, top-right, bottom-right, bottom-left
}

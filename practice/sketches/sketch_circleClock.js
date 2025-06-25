function setup() {
  createCanvas(windowWidth, windowHeight);
  // 注意！！：これが正規の書き方
}

function draw() {
  background(0, 0, 0);

  strokeWeight(3);
  stroke(149, 149, 149);
  noFill();
  ellipse(300, 300, 60, 60);

  stroke(255, 255, 255);
  strokeWeight(5);
  noFill();
  ellipse(300, 300, second(), second());

  ellipse(300, 300, hour() * 25, hour() * 25);
  //時針
  // hour()は0~23を返すので、25を掛けるとちょうど画面のフルサイズになる(600px)

  ellipse(300, 300, minute() * 10, minute() * 10);
  //分針
  // minute()は0~59を返すので、10を掛けると掛けるとちょうど画面のフルサイズになる(600px)
}

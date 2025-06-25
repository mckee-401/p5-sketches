function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(255, 255, 255);
  //こっちに置くと毎回塗りつぶしが実行されるので注意

  //ellipse(random(0, windowWidth), random(0, windowHeight), 100, 100);
  //0~99.9の範囲でランダムな数値を生成
  //最小値は省略可能　random(100)
  //1sで60回なので、1回あたり1/60s？

  strokeWeight(random(4, 50));

  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(
    random(0, windowWidth),
    random(0, windowHeight),
    random(0, windowHeight),
    random(0, windowHeight)
  );
}

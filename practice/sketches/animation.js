function setup() {
  createCanvas(600, 600);

  strokeWeight(2);
  //枠線の太さ

  fill(255, 200, 100);
  //薄いオレンジ
}

function draw() {
  //1s/60回実行
  background(255, 255, 255);
  //背景を白

  //ellipse(300, 300, 50, 50);
  //(300,300)に幅50、高さ50の円を描く
  //このままでは静止画

  //ellipse(mouseX, mouseY, 50, 50);
  //カーソルの位置に円を描く

  //1フレーム(draw()ブロックが1回実行)で1プラスされる組み込み変数)
  //少しずつ右に動くアニメーション
  // ellipse(frameCount,300,50,50);

  //少しずつ右に動く
  //second()は実行時の時刻を数値として取得するので、0~60を変化
  ellipse(second() * 10, 300, 50, 50);
}

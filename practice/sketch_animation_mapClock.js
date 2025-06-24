function setup() {
  createCanvas(600, 600);
  strokeWeight(4);
  stroke(149, 149, 149);
  ellipse(300, 300, 50, 50);
}

function draw() {
  background(255, 255, 255);

  //下の円
  strokeWeight(4);
  stroke(200);
  noFill();
  arc(300, 300, 50, 50, 0, TWO_PI);

  //arc(x座標,y座標,幅,高さ,弧の始点,弧の終点,モード);
  //で円弧が描ける

  //PI..180,HALF_PI...90
  //QUARTER_PI...45,TWO_PI...360
  //という変数で弧の始点,弧の終点を書く
  //弧の始点は右端(3時方向)

  //モードは
  //OPEN..線を閉じずに開けておく(既定値)
  //CHORD..端点を直線で閉じる
  //PIE...パイを斬るように三角に閉じる

  stroke(190, 148, 255);
  let x = map(second(), 0, 60, 0, TWO_PI);
  //map(入力値,最小,最大,新しい最小,新しい最大);
  //で入力値の範囲を変換できる
  //比率の変換なので、1sで進むのはあくまで360/60=6度
  arc(300, 300, 50, 50, TWO_PI - HALF_PI, x);
  //TWO_PI-HALF_PIで、上端(12時方向)から始まる
}

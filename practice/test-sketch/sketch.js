function setup() {
  createCanvas(1200, 1200);
  //キャンバス作成
}

function nousePressed() {}

function draw() {
  background(0, 127, 255);
  //背景色を指定

  rect(0, 100, 200, 300);
  //四角形　(x,y,幅,高さ)

  fill(125, 127, 255);
  //図形の塗りつぶし (赤,緑,青,不透明度)
  //nofill()あり

  stroke(255, 0, 0);
  //枠線の色変更 (赤,緑,青,不透明度)
  //noStroke()あり

  strokeWeight(10);
  //枠線の太さ変更

  ellipse(600, 200, 100, 100);
  //楕円　(中心のx,中心のy,幅,高さ)
  //スペル注意
  fill(125, 127, 0);

  line(300, 300, 5, 500);
  //直線　(始点x,始点y,終点x,終点y)

  triangle(300, 200, 400, 100, 500, 200);
  //三角形 (X座標1, Y座標1, X座標2, Y座標2, X座標3, Y座標3))

  beginShape();
  vertex(100, 100);
  vertex(200, 200);
  vertex(500, 400);
  endShape(CLOSE);
  //多角形 vertex(x, y)で頂点を指定
}
//正しいURLはhttp://localhost:5555/test-sketch/

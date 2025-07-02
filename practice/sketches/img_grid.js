//画像と2次元グリッドの組み合わせ

let img;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);
  img = loadImage("img/mona.jpg");
}

function draw() {
  background(0);
  for (let x = 0; x <= 600; x += 20) {
    for (let y = 0; y <= 600; y += 20) {
      let col = img.get(x, y);
      fill(col);
      ellipse(x, y, 10, 10);
    }
  }
}

// hue()...色相を数値で取得
// saturation()...彩度を数値で取得
// brightness()...明度を取得
// red()...赤を取得
// green()...緑を取得
// blue()...青を取得

// ex)
// ・明度が高いほどセルを大きくする
// ・色をRGBに分解してディスプレイの画素のように大きくする

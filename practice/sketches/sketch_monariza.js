//画像の読み込みを行うプログラム
let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  img = loadImage("pic/mona.jpg");
  // 画像の読み込み
}

function draw() {
  image(img, 0, 0);
  //image(画像,x,y,width,height)で画像を描画(width,heightは任意)
}

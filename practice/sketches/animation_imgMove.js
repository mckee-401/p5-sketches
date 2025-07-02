//アニメーション

let img0, img1, img2, img3, count, f;
function setup() {
  createCanvas(windowWidth, windowHeight);
  count = 0;
  img0 = loadImage("img/frame-0.png");
  img1 = loadImage("img/frame-1.png");
  img2 = loadImage("img/frame-2.png");
  img3 = loadImage("img/frame-3.png");
}

function draw() {
  background(255);
  count += 0.1;
  if (count >= 4) {
    count = 0;
  }

  f = floor(count);
  //fllorでcountを切り捨てしてフレーム番号を計算
  if (count == 0) {
    image(img0, 0, 0);
  } else if (count == 1) {
    image(img1, 0, 0);
  } else if (count == 2) {
    image(img2, 0, 0);
  } else if (count == 3) {
    image(img3, 0, 0);
  }

  let col = img0.get(mouseX, mouseY);
  //image.get(x,y)でマウス位置の画像の色を取得

  //get(x,y)でキャンバス上の色を取得できる

  fill(col);
  //取得色で塗りができる

  // その他
  // copy()...画像の一部分をコピー
  // tint()...画像に着色・不透明度を変更
}

//参考例　画像の描画スピードをスライダーで調節できる

// let img0, img1, img2, img3;
// let count = 0;
// let frameCounter = 0;
// let speedSlider;

// function preload() {
//   img0 = loadImage("img/frame-0.png");
//   img1 = loadImage("img/frame-1.png");
//   img2 = loadImage("img/frame-2.png");
//   img3 = loadImage("img/frame-3.png");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   speedSlider = createSlider(1, 60, 10); // 1〜60フレーム間隔、初期値10
//   speedSlider.position(10, 10);
// }

// function draw() {
//   background(255);

//   let interval = speedSlider.value(); // スライダー値をそのまま使う
//   // 例えばmapで別の範囲に変換することもできる
//   // let interval = map(speedSlider.value(), 1, 60, 2, 20);

//   frameCounter++;
//   if (frameCounter % interval == 0) {
//     count = (count + 1) % 4;
//   }

//   if (count == 0) image(img0, 0, 0);
//   else if (count == 1) image(img1, 0, 0);
//   else if (count == 2) image(img2, 0, 0);
//   else if (count == 3) image(img3, 0, 0);
// }

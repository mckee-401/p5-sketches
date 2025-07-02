//グラデーション
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  for (let x = 0; x <= 1200; x++) {
    for (let i = 0; i <= 1200; i += 1) {
      rect(i, 0, 50, windowHeight);
      //rect(x,y,width,height)で四角形
      fill(i / 3, 0, 255 - i / 3);
      //円を四角形→高さを上げることでグラデーションを実現している
    }
  }
}

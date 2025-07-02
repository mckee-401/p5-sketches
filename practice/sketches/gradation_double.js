//2色のグラデーション
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  for (let x = 0; x <= 1200; x++) {
    for (let y = 0; y <= 1200; y++) {
      fill(x / 3, 0, 255 - y / 3);
      rect(x, y, 10, 10);
    }
  }
}

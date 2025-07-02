//動く円を大量に生成する+数や色などを変更

//これ、MVに使えそう(暴れる範囲を設定すれば)
let ballXs = [];
let ballYs = [];
let radius = [];
let color = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0, 0, 0);

  for (let i = 0; i < 100; i++) {
    ballXs[i] = width / 2;
    ballYs[i] = height / 2;
  }
}

function draw() {
  background(255, 255, 255);

  for (let i = 0; i < 100; i++) {
    ballXs[i] += random(-10, 10);
    ballYs[i] += random(-10, 10);
    radius[i] = random(0, 50);
  }

  for (let i = 1; i < 100; i++) {
    color[i] = fill(random(255), 9, 100);
    ellipse(ballXs[i], ballYs[i], radius[i], radius[i]);
  }
}

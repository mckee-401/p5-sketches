//多重円を描く

let i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  //外円だけ使うなら必須！
}

function mousePressed() {
  i = 0;
  while (i < 20) {
    ellipse(mouseX, mouseY, i * 10, i * 10);
    i += 1;
  }
}

function draw() {}

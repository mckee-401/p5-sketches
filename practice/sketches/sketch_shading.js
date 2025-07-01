//濃淡をつけながらマウスを押した位置に円を描く

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  let i = 0;
  let sz = random(10);

  fill(0, 0, 0, random(100));
  noStroke();

  while (i < 20) {
    ellipse(mouseX + random(-20, 20), mouseY + random(-20, 20), sz, sz);
    i++;
  }
}

function draw() {}

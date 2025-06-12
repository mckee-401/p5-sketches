let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  //右クリックのコンテキストメニューを無効化
  canvas.elt.oncontextmenu = () => false;
}

function mouseDragged() {
  //==だと、自動で型変換されてしまう
  //===だと、型と値の両方を比較してくれる
  if (mouseButton === LEFT) {
    stroke(255, 100, 0);
  } else if (mouseButton === RIGHT) {
    stroke(255, 0, 0);
  }

  line(pmouseX, pmouseY, mouseX, mouseY);
}
function draw() {}

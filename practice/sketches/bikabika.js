//横縦に並んだ円がビカビカ光る
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  for (let x = 0; x <= 600; x += 50) {
    for (let y = 0; y <= 600; y += 50) {
      ellipse(x, y, 30, 30);
      fill(random(255), random(255), random(255));
      //図形の描画→塗りつぶしが高速で行われて
      //ビカビカになるという面白い発見
    }
  }
}

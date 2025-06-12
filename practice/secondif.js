function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  //右クリックのコンテキストメニューを無効化
  canvas.elt.oncontextmenu = () => false;
}

function mouseDragged() {
  
  //ドラッグした秒数が偶数秒なら塗りを赤色に
  if(second()%2 ===0){
    fill(255,0,0);
  }
  //奇数秒なら黒色に
  else{
    fill(0,0,0);
  }
  
  ellipse(mouseX,mouseY,100,100);
}
function draw() {}

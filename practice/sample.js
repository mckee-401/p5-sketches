function setup(){
  createCanvas(windowWidth,windowHeight);
  //枠線の太さ変更
  strokeWeight(2);
  
  //薄いオレンジで塗る
  fill(255,200,100);
}

//実は、1秒間に約60回の頻度で高速に繰り返されるブロック
function draw(){
  //背景色を白に
  background(255,255,255);
  
  //1フレーム(draw()ブロックが1回実行)で1プラスされる組み込み変数)
  //少しずつ右に動くアニメーション
  // ellipse(frameCount,300,50,50);
  
  //少しずつ右に動く
  //second()は実行時の時刻を数値として取得するので、0~60を変化
  ellipse(second()*10,300,50,50);
  
}
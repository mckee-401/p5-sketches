function setup(){
　createCanvas(600,600);
  background(200,200,200);
  noStroke();
}

function mouseMoved(){
  if(mouseX<100 || mouseX>500){
    //塗りを黒色に
    fill(0,0,0);
  }
  else{
    //塗りを白色に
    fill(255,255,255);
  }


  ellipse(mouseX,mouseY,100,100);
}
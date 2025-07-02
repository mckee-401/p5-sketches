
function setup() {

  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  if(keyIsPressed){
    if(key=='r'){
      fill(255,64,64);
    }else if(key == 'g'){
      fill(127,255,0);
    }else if(key == 'b'){
      fill(0,127,255);
    }else{
      fill(255);
    }
  }
  
  circle(width/2,height/2,300);

}
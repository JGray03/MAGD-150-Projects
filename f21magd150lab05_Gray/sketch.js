var angle = 0.0;
var offset = 175;
var scalar = 30;
var speed = 0.05;




let circleColor, rect1Color, rect2Color, screenColor;
function setup() {
  createCanvas(400, 400);
circleColor= 255;
rect1Color = color(255,255,255);
  rect2Color=color(255,255,255);
  screencolor=color(0);
  onOff=false;
}

function draw() {
  background('#7EC6EB');
  
   var y1 = offset +sin(angle)* scalar
  var y2 = offset +sin(angle + 0.4)* scalar;
  var y3 = offset +sin(angle + 0.8)* scalar;
  
  angle += speed;
  
  fill('#EBB54A');
  strokeWeight(2);
  rect (100, 110, 210, 180);
 
  if(onOff){
    screenColor=color(255)
  }else {
    screenColor=color(0);
  }
 
 
  fill(screenColor);
  strokeWeight(2);
  rect (110, 120, 190, 110, 20);
 
 
 
  strokeWeight(1)
 

  //top
  fill(rect1Color);
  rect (120, 235, 80, 20);
 
  //CD tray
    fill(200);
    rect (120, 262, 80, 20);
 
fill(circleColor);
circle (250, 260, 40);
 
 
  fill(1)
  textSize(15)
  text("Hover over", 124, 250)
 
 

 
 
  fill(1);
  textSize(7);
  text("Hover over", 233, 262);
  
  fill(1);
  textSize(7);
  text("/press", 238,270);
 
  //Hoverover circle and press
  if((dist(mouseX, mouseY, 250,260))<20){
    circleColor=220;
    
  }else {
    circleColor=255;
    
     ellipse( 150, y1, 40 ,40);
ellipse (190, y2, 40, 40);  
  ellipse(230, y3, 40 ,40);
    
  }
 
//  hoverover rect
  if(mouseX>120 && mouseX<200 && mouseY>235 && mouseY<255){
     rect1Color = color(255,0,0);
     } else rect1Color = color(255);
  

}


function mousePressed(){
  if((dist(mouseX, mouseY, 250,260))<20){
    onOff=!onOff;
  }
  

}

  
let base=0;
let basePressed=0;
let keyToggle = false;
function setup() {
  createCanvas(500, 500);
}

function draw() {
 

    background(135, 187, 255, 100);
 
  if (basePressed==1){
  // pizza crust
   fill(230, 145, 14, 90);
  circle (250, 250, 250);
  } else if (basePressed==2){// pizza sauce
   fill(230, 145, 14, 90);
  circle (250, 250, 250);
  fill (255, 95, 78, 100);
  circle (250, 250, 220);
 } else if (basePressed ==3){  // pizza cheese
 fill(230, 145, 14, 90);
  circle (250, 250, 250);
  fill (255, 95, 78, 100);
  circle (250, 250, 220);
  fill (255, 253, 69, 100);
  circle (250, 250, 205);
  }
 

 
  // Want to put a loop to change colors
      push();
  fill (66, 161, 245);
  rect (0, 10,500,40);
    pop();
    fill(0)
  textSize(30)
  text('BUILD A PIZZA', 150, 40);
 
if (keyToggle){
    if(key =='p'){   // pepperoni
  // toppings for pizza
  for (x=0; x<=6; x++){
       fill ('#EB1F18');
       circle ((width/2+(40*cos(PI/3*x))),(height/2+(40*sin(PI/3*x))), 30);
  }
} else if (key == 'a'){
  fill(242, 245, 66);
  quad (225, 225, 230, 235, 220, 240, 215, 220);
  quad (305, 305, 320, 315, 310, 320, 300, 300)
  quad (270, 250, 240, 220, 270, 260, 250, 250)
  }
}

}

 

function mousePressed(){
  base++;
  basePressed = base%4;
 }
 
  function keyPressed(){
    keyToggle = !keyToggle;
  }
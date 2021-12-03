let a;
let b;
let c;
var popu;
function preload(){
  b = loadImage('CITY #3.jpeg');
  a = loadImage('CITY #2.jpeg');
  c = loadImage('CITY #1.jpeg');
  popu =loadTable("milwaukee.csv");
}

function setup() {
  createCanvas(400, 400, WEBGL);
var rowCount = popu.getRowCount();
 //This is to show the population of milwaukee in the printed box below
  for (var i = 0; i < popu.getRowCount(); i++) {
    let yr = popu.get(i, 0);
    let city= popu.get(i,1);
   print(yr, city);
    //This prints out the years and the population for that year
  }
 
 
}

function draw() {
    orbitControl();
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
 
  ambientLight(80, 80, 80);
   pointLight(255, 255, 255, locX, locY, 100);
 
normalMaterial();
 
  //This is the box and the frameCounts make it move in a circle
  push();
  translate(80, -80, 50)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
texture(a);
  box(90, 90, 90);
  pop();


// This is the cone of the project and has one of the pictures on it
  push();
  translate(60, 60, 90)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
texture(b);
  cone(50, 50);
  pop();

// Sphere
  push();
  translate(-140, 100, -100)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
texture(c);
  sphere(70);
  pop();
 
}
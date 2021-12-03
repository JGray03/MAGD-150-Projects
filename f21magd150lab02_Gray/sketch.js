function setup() {
  createCanvas(400, 400);
    background(70);
}

function draw() {
  colorMode(RGB, 255);
  fill(110,180,245,96)
  circle(200,200,250);
  //The moon of the planet
  strokeWeight(1);
  colorMode(HSB, 100)
  fill(278, 60, 92);
  arc(320, 80, 50, 50, 0, PI+QUARTER_PI, CHORD);
  
  noFill()
  strokeWeight(1)
 bezier(75,190,15,225,350,250,325,190)
  // stars
  colorMode(RGB, 255)
  fill(255)
  circle(80, 50, 5)
  fill(235, 181, 0)
  circle(50,170,5)
  fill(162, 68, 242)
  circle(75,300,5)
  circle(250,50,5)
  fill(127, 245, 110)
  circle(100,350,5)
  circle(350,200,5)
  circle(350,300,5)
  
  fill('#EBE900')
  triangle(300,300,300,280,280,280)
}
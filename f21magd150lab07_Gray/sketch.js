let leaves = [];

function setup() {
  createCanvas(400, 400);
  //The arrays and i's allows for the amount of leaves in the canvas
 for (let i = 0; i < 6; i++) {
   let x = 50 + 100 * i;
   leaves [i] = new leaf(x, 200, 20)
}
}
//the background for the canvas, it uses a ellipse for the ground and a blue background
function draw() {
  background('#62B1EB');
  fill('#F5BD00')
  ellipse(200, 370, 500, 120)
 for (let i = 0; i < 6; i++) {
   leaves [i].move();
   leaves [i].show();
}
}
class leaf {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  //This adds motion to the leaves giving the impression of wind. -5 and 5 gives them motion
  move(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  //this should be a push pop for leaves. This gives them structure
  show(){

    push();
    stroke(255);
    strokeWeight(1);
    fill('#EB9227');
    ellipse(this.x, this.y, 40, 60);
    pop();
   stroke(0);
    line(this.x, this.y-50, this.x, this.y+30);
    line(this.x-10, this.y-10, this.x, this.y);
    line(this.x+10, this.y+10, this.x, this.y)
  }
}
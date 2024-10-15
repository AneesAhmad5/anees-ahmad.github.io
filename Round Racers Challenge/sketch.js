// Round Racers
// Anees Ahmad
// 10/15/24

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let i = 0; i < points.length; i ++){
    points[i].move();
    points[i].display();
  }
}

function mouseClicked(){
  points.push(new MiniPoint(mouseX, mouseY));
}

class MiniPoint{
  //constructor function
  constructor(x,y){
    //set up class variables
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.s = 20;
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.offset = 0.01;
    this.MAX_SPEED = 5;
  }
  //class functions
  display(){
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.s);
  }
  move(){
    let xspeed = map(noise(this.noiseX),0, 1, - this.MAX_SPEED, this.MAX_SPEED);
    let yspeed = map(noise(this.noiseY),0, 1, - this.MAX_SPEED, this.MAX_SPEED);
    this.x += xspeed;
    this.y += yspeed;
    this.noiseX += this.offset;
    this.noiseY += this.offset;
  }
}
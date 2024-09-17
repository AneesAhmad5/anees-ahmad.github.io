// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


rX = 500; rY = 500; cX = 500; cY = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function line_Draw(){
  stroke(0,0,0)
  strokeWeight(10);
  line(rX-75,rY,rX+75,rY);
}

function leg() {
  noStroke()
  fill(100,300,100)
  rect(rX-175, rY+100,50,200)
  rect(rX+175, rY+100,50,200)
}

function draw() {
  noStroke();
  background(220);
  fill(100,300,100);
  circle(cX, cY, 400);
  rectMode(CENTER);
  rect(rX, rY, 400, 200);
  fill(0,0,0);
  circle(rX-100, rY-100, 50, 100);
  circle(rX+100, rY-100, 50, 100);
  line_Draw();
  leg()
}


// Coordinate Systems
// Anees Ahmad
// September 11, 2024
// Looking at how coordinates work in p5.js

function setup() {
  print("Setup runs once, at the start. ")
  createCanvas(500, 400);
}

function draw() {
  //runs over and over (targetting 60fps)
  //when possible, keep draw() short
  background(220);
  drawCircles();
}

function drawCircles(){
  //draw some circles
  fill(250,0,250);  //R, G, B
  circle(width,0,50);

  fill(500,0,0);
  circle(width,height,50);

  fill(0,500,0);
  circle(0,0,50);

  fill(0,0,500);
  circle(0,height,50);

  fill(250,250,0);
  circle((width/2),(height/2),50);
}
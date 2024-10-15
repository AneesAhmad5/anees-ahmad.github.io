// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircles();
}

function drawCircles(){
  for(let x = 0; x < windowWidth; x = x+ 100){
    circle(x, 0, 40);
    line(x,0,mouseX, mouseY);
    circle(x, windowHeight, 40);
    line(x, windowHeight, mouseX, mouseY);
    for(let y = 0; y < windowHeight; y = y + 100) {
      circle(0,y,40);
      line(0, y, mouseX, mouseY);
      circle(windowWidth,y,40);
      line(windowWidth, y, mouseX, mouseY);
    }
  }
}

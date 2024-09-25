// Wousewheel, map, Lerp
// Anees Ahmad
// 9/25/24

let x, y, d=50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;  y = height/2;
  noFill();
}

function draw() {
  background(220);


  circle(x,y,d);
}

function mouseWheel(event){
  print(event);
}
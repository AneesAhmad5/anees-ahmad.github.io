// Cars Assignment
// Anees Ahmad
// 10/18/2024
// A program that displays a highway of cars going opposite directions.


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  draw_road();
}

//creating the road
let stripespace = 100; 
function draw_road(){
  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(width/2, height/2, width, 500);
  fill(255);
  for(let w = 0; w < width; w += stripespace){
    print(w);
    rect(w, height/2, 60, 10);
  }
}
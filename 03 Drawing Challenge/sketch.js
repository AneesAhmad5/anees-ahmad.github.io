// Drawing Challenge
// Anees Ahmad
// September 13, 2024
//

let rX = 60;    let rY = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); //corner
}

function draw() {
  background(220);
  //moving rectangle
  if(keyIsPressed && key==="a"){
    //good to use in draw() when we 
    //want to detect a button being held
    rY += 2;;
    if(rY > height) rY = 0;
  }
  
  fill(200,255,150);
  rect(rX, rY, 100, 50, 10, 20, 0, 10);

}

function keyPressed(){
  //don't call this function... it runs 
  //automatically
  if(keyCode === DOWN_ARROW){
    rY += 50;
  }
}
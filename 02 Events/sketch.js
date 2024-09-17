// Events (Mouse/Keyboard)
// Anees Ahmad
// 9/12/2024
// 

//Global Variable Scope
let tSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}



//   //Challenge 1:
//   //Display position on the Canvas
//   // p5.js reference...
// }


function draw() {
  background(220);

  // if(mouseIsPressed) tSize = random(20,80);
  textSize(tSize);
  let position = mouseX + ", " + mouseY;
  text(position, mouseX, mouseY);
}


function mousePressed(){
  tSize = random(20,200);
}
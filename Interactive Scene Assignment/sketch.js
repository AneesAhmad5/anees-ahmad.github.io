// Interactive Scene Assignment
// Anees Ahmad
// 9/16/2024
// A program that creates a scene which elements can be changed by user interaction.



function setup() {
  createCanvas(windowWidth, windowHeight);
}

let currentBack = 1 //setting up the variables for the challenge feature

function mouseClicked(mouseButton) {
  console.log(mouseButton);
}

function cycleBackground(){
  console.log("CENTER");
  if(currentBack === 4) currentBack = 0;
  currentBack = currentBack + 1;
  console.log(currentBack)
}

function backgroundChange(){
  if(currentBack === 1) return 25,30,50;
  else if(currentBack === 2) return 0,0,0;
  else if(currentBack === 3) return 0,50,100;
  else if(currentBack === 4) return 300,240,120;
}


function draw() {
  console.log(windowHeight, windowWidth);
  background(25,30,50);
  if(mouseIsPressed === true && mouseButton === CENTER){
    cycleBackground();
  }
  noStroke();
  fill(300,300,300);
  rect(0, 700, windowWidth, 300);
}


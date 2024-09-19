// Interactive Scene Assignment
// Anees Ahmad
// 9/16/2024
// A program that creates a scene which elements can be changed by user interaction.



function setup() { //setting up the canvas
  createCanvas(windowWidth, windowHeight);
}

let currentBack = 1 //setting up the variables for the challenge feature

function background1(){
  background(245, 180, 144);
  noStroke()
  fill(245, 203, 66);
  circle(300,700,200);

}

function background2(){
  background(49, 71, 94);
  noStroke();
  fill(235, 228, 228);
  circle(1350,450,100);
  fill(49, 71, 94);
  circle(1360,440,100);

}

function background3(){
  background(0,0,0);
  noStroke()
  fill(235, 228, 228);
  circle(850,250,100);
  fill(0,0,0);
  circle(860,240,100);
}

function background4(){
  background(189, 132, 158);
  noStroke();
  fill(245, 203, 66);
  circle(1300,700,200);
}

function character(){
  circle(860,200,10)
  circle(860,220,30)
  circle(860,240,50)
}

function mouseReleased(){ //this function is called when the user presses a mouse button
  if(mouseButton === CENTER){ // the following code only activates when the button that is pressed is the "center" button.
  console.log("CENTER")
  if(currentBack === 4) currentBack = 0;
  currentBack = currentBack + 1; // cycling through each background
  console.log(currentBack)
  }
}

function backgroundChange(){
  if(currentBack === 1) background1();
  else if(currentBack === 2) background2();
  else if(currentBack === 3) background3();
  else if(currentBack === 4) background4();
}

function draw() {
  console.log(windowHeight, windowWidth);
  backgroundChange();
  noStroke();
  character()
  fill(300,300,300);
  rect(0, 700, windowWidth, 300);
}

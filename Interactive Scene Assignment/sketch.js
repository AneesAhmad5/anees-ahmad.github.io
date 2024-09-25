// Interactive Scene Assignment
// Anees Ahmad
// 9/16/2024
// A program that creates a scene which elements can be changed by user interaction.



// Creating the BACKGROUND

function setup() { //setting up the canvas
  createCanvas(windowWidth, windowHeight);
}

let currentBack = 1; //setting up the variables for the challenge feature


//copied from CS30 notes
function gradientBackground(r, g, b) {
  //this code loops a ton of 1 pixel long rectangles and changes the colour darker with each rectangle, giving a gradient effect.

  let rectHeight = 1; // rectangle height (or the increments by which the colour changes)
  noStroke(); //takes off the outline for each rectangle so that the background isnt just black
  for (let y = 0; y < height; y += rectHeight) {
    let value = map(y, 0, width, 0, 255); // gives the value variable a difference from each y position.
    fill(value + r, value - g, value + b);
    rect(0, y, width, rectHeight);
  }
}

//Adding some background elements
function sun(x){ // adding a sun, will be the same besides X position for all backgrounds
  noStroke();
  fill(245, 203, 66);
  circle(x, 700, 200);
  fill(255, 170, 0);
  circle(x, 700, 125);
  fill(255, 100, 0);
  circle(x, 700, 50);
}

function moon(r1,g1,b1,posX,posY){ //adding a moon. RGB values will need to be adjusted based on background
  noStroke();
  fill(235, 228, 228);
  circle(posX, posY, 100);
  fill(r1, g1, b1);
  circle(posX+10, posY-10, 100);
}

function mountain(posX, colournum, height){ //Colour can vary between mountains, and so can the X position and height for some unique effects
  noStroke();
  fill(142-colournum, 148-colournum, 158-colournum);
  triangle(posX,700,posX+200,height,posX+400,700);
}

//background cycles. These individual backgrounds will be called uo once the scroll wheel is pressed.

function background1() {
  gradientBackground(255, 136, 0);
  sun(300);
  mountain(600, 50, 300);
  mountain(350, 100, 200);
}

function background2() {
  background(49, 71, 94);
  moon(49, 71, 94, 1350, 450);
  mountain(700,50,100)
  mountain(500,0,250)

}

function background3() {
  background(0, 0, 0);
  moon(0,0,0,860,240)
  mountain(150,0,300)
  mountain(250,50,100)
}

function background4() {
  gradientBackground(140, 40, 210);
  sun(1300)
  mountain(500,70,100)
  mountain(300,20,250)
}

function nametag(){ //Adding my name to the bottom right corner of the screen
  textSize(30);
  text("Anees Ahmad", windowWidth-220, windowHeight-20);
}

// Creating the CHARACTER

// Setting up a fixed Y position for the snowman. This will be used in every function related to the snowman
snowmanY = 740
//Because X positions are always changing, there is no reason to allocate a variable that all the functions can use.

//Dividing the snowman into parts to make it easier to read and change.
function body() {
  strokeWeight(0.1);
  stroke(0, 0, 0);
  fill(200, 255, 255);
  circle(mouseX, snowmanY, 95);
  circle(mouseX, snowmanY - 50, 70);
  circle(mouseX, snowmanY - 100, 50);
}
function arms() {
  stroke(0, 0, 0);
  strokeWeight(10);
  line(mouseX, snowmanY - 40, mouseX - 70, snowmanY - 75); //Each indiviual part of the snowman needs a different position relative to the mouse, 
  line(mouseX, snowmanY - 40, mouseX + 70, snowmanY - 75); // which is why variables are altered in the funcion
}
function eyes() {
  fill(0, 0, 0);
  circle(mouseX - 10, snowmanY - 100, 5);
  circle(mouseX + 10, snowmanY - 100, 5);
}

//putting all parts together
function character() {
  arms();
  body();
  eyes();
}

//Creating the Interactive ELEMENTS


//This function changes the Snowman's Y position based on either the up or down arrow.
function keyReleased(){
  if (keyCode === 38){
    snowmanY=snowmanY-10;
  }
  else if(keyCode === 40){
    snowmanY=snowmanY+10
  }
}

function mouseReleased() { //this function is called when the user presses a mouse button
  if (mouseButton === CENTER) { // the following code only activates when the button that is pressed is the "center" button.
    console.log("CENTER");
    if (currentBack === 4) currentBack = 0;
    currentBack ++; // cycling through each background
    console.log(currentBack); //for debugging purposes
  }
}

function backgroundChange() { //adding the processing function for the both the background cycler and the different backgrounds.
  if (currentBack === 1) background1(); // This code makes sure that depending on which mode the background is at a specific scene will show.
  else if (currentBack === 2) background2();
  else if (currentBack === 3) background3();
  else if (currentBack === 4) background4();
}

//The drawing function

function draw() {
  console.log(windowHeight, windowWidth);
  backgroundChange();
  noStroke();
  fill(300, 300, 300);
  rectMode(CORNER)
  rect(0, 700, windowWidth, 300);
  character();
  nametag();
}

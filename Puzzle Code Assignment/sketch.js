// Puzzle Game Assignment 
// Anees Ahmad
// 10/30/2024
// A program that creates a puzzle game board requiring the player to click squares to change their colour.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;

//counting the number of white or black squares
let squares_b = 0, squares_w = 0;
//adding a variable that checks whether or not spacebar has been pressed.
let spaceBar = false;

//the array is all set to 0 to make it simple.
let gridData = [[0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]];


function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomize_squares();
}

//creating a toggle function for the challenge feature that checks if the spacebar has been checked.
function keyPressed(){
  if(keyCode === 32){
    if(spaceBar === false){ //if its off, then turn it on
      spaceBar = true;
    }
    else{ //if its on, then turn it off.
      spaceBar = false;
    }
  }
}


function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();               //render the current game board to the screen (and the overlay)
  if(squares_b === 20 || squares_w === 20){ //adding a win condition when either black or white squares hit a total of 20.
    win_condition();
  }
  coloured_overlay(); //infinitely adding the colour effect
}


function mousePressed() { 
  if(spaceBar === false){ // // "+" shape flipping
    if (keyIsPressed && keyCode === 16) { //if shift is pressed, only one square flipped
      flip(currentCol, currentRow);
    }
    else {
      // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
      flip(currentCol, currentRow);
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    }
  }
  else{  //square shape flipping
    if (keyIsPressed && keyCode === 16) { //if shift is pressed, only one square flipped
      flip(currentCol, currentRow);
    }
    else {
      // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
      flip(currentCol, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol + 1, currentRow+1);
      flip(currentCol, currentRow + 1);
    }
  }
}

function flip(col, row) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) {
        gridData[row][col] = 255;
      }
      else {
        gridData[row][col] = 0;
      }
    }
    //verifying and checking the number of white/black squares after each time they change. 
    check_colours();
    console.log('w: ' + squares_w, '   b: ' + squares_b);
  }
}

function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


//adding the green overlay that signals which squares are
function coloured_overlay(){
  let x = currentCol*rectWidth, y = currentRow*rectHeight;
  fill(0,0,255 ,100);
  if(spaceBar === false){ // "+" shape overlay
    if(keyIsPressed && keyCode === 16){ //shift -- one square
      rect(x, y, rectWidth, rectHeight);  
    }
    else{ //requires five squares
      rect(x, y, rectWidth, rectHeight);
      rect(x, y-rectHeight, rectWidth, rectHeight);
      rect(x, y+rectHeight, rectWidth, rectHeight);
      rect(x+rectWidth, y, rectWidth, rectHeight);
      rect(x-rectWidth, y, rectWidth, rectHeight);
    }
  }
  else{ // square shape overlay
    if(keyIsPressed && keyCode === 16){ //shift -- one square
      rect(x, y, rectWidth, rectHeight);  
    }
    else{
      rect(x, y, rectWidth, rectHeight); //square -- four squares
      rect(x+rectWidth, y, rectWidth, rectHeight);
      rect(x, y+rectHeight, rectWidth, rectHeight);
      rect(x+rectWidth, y+rectHeight, rectWidth, rectHeight);
    }
  }
}



function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function check_colours(){ //adding a counter to see how many black or white squares are on the screen
  squares_b = 0;
  squares_w = 0;
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      if(gridData[y][x] === 0){
        squares_b += 1; //black squares
      } 
      if(gridData[y][x] === 255){
        squares_w += 1; //white squares
      }
    }
  }
}


function randomize_squares(){ // a function that randomizes which colour each square will be on start
  let random_choice; 
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      random_choice = int(random(0,2)); //random choice between 0 & 1
      if(random_choice === 1){
        gridData[y][x] = 255; //white
      }
      else{
        gridData[y][x] = 0; //black
      }
    }
  }  
}

function win_condition(){ //adding a win screen that displays once all squares are the same colour.
  textAlign(CENTER);
  textSize(200);
  fill(0,255,0);
  text('you win', windowWidth/2, windowHeight/2);
}
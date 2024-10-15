// Perlin Noise Project
// Anees Ahmad
// 10/1/2024
// A terrain generator that uses the perlin noise feature.
// Will have in detail elements to meet some challenge features



//Setting up the canvas for the terrain generator
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Perlin noise terrain generator.
// let cTime = 5; //current "noise" time
let cInterval = 0.01; //how fast we move down/up the noise graph

//Drawing function where elements come into play
function draw() {
  background(220);
  generateTerrain();
}


//CREATING TERRAIN GENERATION


let tWidth = 10; //The terrain width for each rectangle
let start = 0;   //A variable that is used to pan the terrain left. 
let averageY = 0;  //A variable that collects all the rectangle heights and adds them up
let totalRect = 0; // A variable that collects all the number of rectangles
function generateTerrain() { //generating the terrain for the assignment
  let maxY = 0;   // a variable that finds the maximum or highest position of each rectangle
  let posX = 0;   // a variable that matches an x position to the longest rectangle
  averageY = 0;   // setting the average to 0 with each frame. 

  noFill();
  let time = start;
  for (let x = 0; x < width; x += tWidth) { //repeating the process for the screen width
    let y = (noise(time) * height);  //using the noise function to randomize the rectangle lengths. 
    averageY += y;  // setting the average to add up and collect the y values
    if (y > maxY) {  // this function figures out if the y value that is created is the greatest value on the screen or not. 
      maxY = y; // If it is the greatest, then our max value will hold its number.
      posX = x;
    }
    stroke(0);
    rect(x, height, tWidth, -1 * y); //Each rectangle height will be randomized, but the width will be set. 
   
    time += cInterval; // This adds on to the time variable so that "noise" can map a variety of numbers. 
  }
  totalRect = (width/tWidth); // Finding the number of rectangles on the screen by dividing the screen width by the width of each rectangle. 
  console.log(totalRect);

  console.log(averageY);
  drawFlag(posX, windowHeight - maxY); // Drawing a flag at the highest peak
  avgLine(averageY, totalRect); // Drawing a line depicting the average heights. 
  start += cInterval; // Keeping the terrain panning to the left

}


//Changing the width of each rectangle
function keyReleased() { 
  if (keyCode === LEFT_ARROW) { //Decreasing
    if (tWidth > 1) {
      console.log("-tWidth");
      tWidth = tWidth - 1;
    }
  }
  if (keyCode === RIGHT_ARROW) { //Increasing 
    if (tWidth < 20) {
      console.log("+tWidth");
      tWidth = tWidth + 1;
    }
  }
}

function avgLine(y, x){  // Creating an average line
  stroke(255,0,0); //red colour
  line(0,height - y/x,width,height - y/x)
}

function drawFlag(x, y) {
  fill(255,0,0); // red colour
  stroke(0);
  // creating the flag
  line(x, y, x, y - 40);  
  triangle(x, y - 40, x, y - 20, x + 20, y - 30);
}
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
let cInterval = 0.01; //how fast we move down the noise graph

//Drawing function where elements come into play
function draw() {
  background(220);
  generateTerrain();
  frameRate();

}

let tWidth = 10;
let start = 0;
function generateTerrain() {
  let maxY = 0;
  let posX = 0;
  let averageY = 0;
  noFill();
  let time = start;
  for (let x = 0; x < width; x += tWidth) {
    let y = (noise(time) * height);
    console.log("the y is " + y);
    console.log("the x is " + x);
    averageY = (averageY + y);
    console.log("the average y is " + (averageY/x));
    if (y > maxY) {
      maxY = y;
      posX = x;
    }
    stroke(0);
    rect(x, height, tWidth, -1 * y);
    time += cInterval;
  }
  drawFlag(posX, windowHeight - maxY);
  start += cInterval;

}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    if (tWidth > 0.001) {
      console.log("-tWidth");
      tWidth = tWidth - 1;
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if (tWidth < 20) {
      console.log("+tWidth");
      tWidth = tWidth + 1;
    }
  }
}

function avgLine(y, x){
  stroke(255,0,0);
  line(0,y/x,width,y/x)
}

function drawFlag(x, y) {
  fill(255,0,0);
  stroke(0);
  line(x, y, x, y - 40);
  triangle(x, y - 40, x, y - 20, x + 20, y - 30);
}
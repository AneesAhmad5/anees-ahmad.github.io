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
  frameRate()

}

let tWidth = 10
let start = 0
function generateTerrain(){
  let maxY = 10
  let maxX = 0
  stroke(0);
  noFill();
  let time = 0   //start
  for(let x = 0; x < width; x+=tWidth) {
    stroke(0)
    let y = noise(time) * height;
    if(y>maxY){
      maxY = y;
      maxX = x; //*** */
      drawFlag(maxX,maxY);
    }
    rect(x,height,tWidth,-y);
    time += cInterval;
  }
  // start += cInterval;
}

function keyReleased(){
  if(keyCode === LEFT_ARROW){
    if (tWidth > 0.001){ 
      console.log("-tWidth");
      tWidth = tWidth - 1;
    } 
  }
  if(keyCode === RIGHT_ARROW){
    if (tWidth < 20){
      console.log("+tWidth");
      tWidth = tWidth + 1;
    }
  }
}


function drawFlag(x, y){
  stroke(0);
  line(x,y,x,y-40)
  triangle(x,y-40,x,y-20,x+20,y-30)
}
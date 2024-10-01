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
let cTime = 5; //current "noise" time
let cInterval = 0.002; //how fast we move down the noise graph

function perlinTerrain(){
  let tSize = noise(cTime); 
  tSize = map(tSize, 0, 1, 1, 255)
  for(let x = 0; x<width; x+= 5){
   //                         ^rectangle spacing
    fill(0)
    // Making the rectangles
    let rectHeight = tSize
    rect(x, height-20, 5, rectHeight)
  }
}


function perlinCircle() {
  //draw a circle using noise() with
  //unpredictable size (later, color)
  let cSize = noise(cTime); // 0 - 1
  cSize = map(cSize, 0, 1, 1, 255);
  
  let r = noise(cTime); 
  let g = noise(cTime + 2);
  let b = noise(cTime + 5);  

  r = map(r, 0, 1, 0, 255);
  g = map(g, 0, 1, 0, 255);
  b = map(b, 0, 1, 0, 255);

  fill(r,g,b);
  circle(width * 0.5, height / 2, cSize);
  text(round(cSize), width * 0.5, height / 4);
  cTime += cInterval;
}


//Drawing function where elements come into play
function draw() {
  background(220);
  // staircase()
  //perlinTerrain()
  test()
}


let start = 0
function test(){
  stroke(0);
  noFill();
  beginShape();
  let time = start
  for(let x = 0; x < width; x++) {
    stroke(0)
    let y = noise(time) * height;
    vertex(x,y);

    time += cInterval
  }
  endShape();
  start += cInterval
}
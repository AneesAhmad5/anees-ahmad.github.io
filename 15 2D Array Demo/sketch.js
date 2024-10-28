// 2D Array Demo
// Anees Ahmad
// 10/28/2024

let grid = [[0,   100, 250,  50,   200],
            [255, 0,   150,  100,  255],
            [0,   0,   255,  100,  50]];


const NUM_ROWS = 3;
const NUM_COLS = 5;
          
let rectWidth, rectHeight;
let col, row;


function renderGrid(){
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      fill(grid[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}
function getArrayY(){
  return int(mouseX/rectHeight);
}

function getArrayX(){
  return int(mouseX/rectWidth);
}

function setup() {
  createCanvas(500, 300);
  rectWidth = 500/NUM_COLS;
  rectHeight = 300/NUM_ROWS;
}

function draw() {
  background(220);
  renderGrid();
  row = getArrayY;
  col = getArrayX;

  if(frameCount%30===0){
    grid[int(random(NUM_ROWS))][int(random(NUM_COLS))] = random(255);
  }

  print(mouseX, rectWidth, int(mouseX/rectWidth));
}
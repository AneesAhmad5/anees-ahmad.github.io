// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let seed; //creating a random seed for the colours.
let scale = 15;
function setup() {
  createCanvas(500, 500);
  seed = random(100); //seed is updated every time the page loads.
}



function draw() {
  background(255);
  randomSeed(seed);
  drawTree(width / 2, height * 0.9, 90, 6);
}

function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth, ) {
  if (depth > 0) {
    let treeAngle = map(mouseX, 0, width, 5, 15);
    let branch; //setting a variable to count each branch
    let x2 = x1 + (cos(radians(angle)) * depth * scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle)) * depth * scale); //using trig ratios. Get shorter based on depth
    strokeWeight(1);
    stroke(0);
    strokeWeight(depth-0.9);
    //the trunk
    drawLine(x1, y1, x2, y2, depth);


    //for a 2-branch tree:
    drawTree(x2, y2, angle - treeAngle, depth - 1);
    drawTree(x2, y2, angle + treeAngle, depth - 1);
    //3rd
    drawTree(x2, y2, angle, depth - 1);
    if(depth <5){
      drawLeaves(x2,y2, depth);
    }

  }

}
function drawLeaves(x,y,diameter){
  noStroke();
  fill(random(255),random(255),random(255));
  circle(x,y,diameter*8);
}

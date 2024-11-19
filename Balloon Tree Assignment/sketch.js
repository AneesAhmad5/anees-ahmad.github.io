// Balloon Tree Assignment
// Anees Ahmad
// 11/19/24
//

let leaveBranch = 5; //challenge feature #1, changes how many branches the balloons grow on.
let seed; //creating a random seed for the colours.
let scale = 15;
function setup() {
  createCanvas(500, 500);
  seed = random(100); //seed is updated every time the page loads.
}



function draw() {
  background(255);
  randomSeed(seed); //creating a random seed for the colours
  drawTree(width / 2, height * 0.9, 90, 6); //drawing the tree.
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
    strokeWeight(1); //setting the line width to a defined number
    strokeWeight(depth-0.9); //making the strokewight smaller as the branches multiply.
    //the trunk
    drawLine(x1, y1, x2, y2, depth);


    //for a 2-branch tree:
    drawTree(x2, y2, angle - treeAngle, depth - 1);
    drawTree(x2, y2, angle + treeAngle, depth - 1);
    //3rd branch
    drawTree(x2, y2, angle, depth - 1);
    if(depth < leaveBranch){ //setting which branches the leaves should grow on. 
      drawLeaves(x2,y2, random(2,5)); //random sizes, at position x2 and y2 where lines end. 
    }

  }

}

function keyPressed(){ //changing which branch the leaves are pm
  if(keyCode === 90 && leaveBranch > 0){ //cycle up the tree. Cant be lower than the last branch.
    leaveBranch --;
  }
  else if(keyCode === 88 && leaveBranch < 7){ //cycle down the tree. Cant be lower than the first branch
    leaveBranch ++;
  }
}

//drawing leaves function
function drawLeaves(x,y,diameter){
  stroke(0);
  strokeWeight(1);
  fill(random(255),random(255),random(255)); //random colour
  circle(x,y,diameter*8);
}

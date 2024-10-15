// Drawing with Nested Loops
// Anees Ahmad
// Oct 9, 2024

//Global Variable
let gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loopReview();
}

function loopReview() {
  //quickly recap single/nested loops
  for (let x = 0; x <= 40; x = x + 20) { //0, 20, 40
    for (let y = 0; y <= 40; y += 20) {
      print(x, y);
    }
  }
}

function draw() {
  background(220);
  renderGrid();
}

function roundDist(x1, y1, x2, y2) {
  //takes 2 coordinate pairs and returns the dist between but rounded
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return round(c); 
}

function renderGrid() {
  //use nested loop to draw objects in a grid arrangement
  for (let x = 0; x < width; x += gridSpacing) {
    for (let y = 0; y < height; y += gridSpacing) {
      let d = roundDist(x,y,mouseX,mouseY);
      if(d > 150) {
        fill(0);
      }
      else {
        fill(100,50,230); 
      } 
      circle(x, y, gridSpacing);
      fill(255, 50);
      textAlign(CENTER,CENTER);
      text(d, x,y);
    }
  }

}

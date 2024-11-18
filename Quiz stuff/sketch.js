// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  console.log(mystery(5));
}

function mystery(n){
  if (n > 100) {
    return n;
  }
  else if (n < 50) {
    return mystery(n * 2);
  }
  else {
    return mystery(n * 3);
  }
}


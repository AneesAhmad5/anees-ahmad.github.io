// Working With Images
// Anees Ahmad
// October 4th, 2024

let lionL, lionR;
let facingRight = true;
let pinImages = [];
let currentFrame = 0;

function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);
  drawLions();
  drawPinwheel();
}

function drawPinwheel() {
  image(pinImages[currentFrame], width / 2, height / 2);
  if (frameCount % 5 === 0) {
    currentFrame++;
    if (currentFrame > 8) currentFrame = 0;
  }
}

function drawLions() {
  if (mouseX > pmouseX) facingRight = true;
  else if (mouseX < pmouseX) facingRight = false;
  if (facingRight) {
    image(lionR, mouseX, mouseY, lionR.width / 2, lionR.height / 2);
  }
  else {
    image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height / 2);
  }
}

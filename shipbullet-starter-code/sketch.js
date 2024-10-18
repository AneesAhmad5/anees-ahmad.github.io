// OOP Pair Programming Starter Code
// Anees + Sai + Daniel
// 10/17/2024


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!



class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.theImage = theImage
    this.speed = 10
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(LEFT_ARROW)) { this.x = this.x - this.speed }
    if (keyIsDown(DOWN_ARROW)) { this.y = this.y + this.speed }
    if (keyIsDown(UP_ARROW)) { this.y = this.y - this.speed }
    if (keyIsDown(RIGHT_ARROW)) { this.x = this.x + this.speed }
    }

    // if doing extra for experts, show bullet(s)

  display() {
    // show the ship
    imageMode(CENTER);
    image(this.theImage, this.x, this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    
    let bullets = [];
    
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx; 
    this.dy = dy;
    this.img = theImage;
  }

  update() {
    while(this.y < height){
      this.x += 20;
    }
  }

  display() {
    imageMode(CENTER);
    image(this.img,  this.x, this.y)
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}


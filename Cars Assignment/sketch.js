// Cars Assignment
// Anees Ahmad
// 10/18/2024
// A program that displays a highway of cars going opposite directions.

// creating two arrays to hold all the variables and differ directions
let eastbound = [];
let westbound = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let n = 0; n < 20; n ++) {
    eastbound.push(new Vehicle(int(random(2))), 0);
  }
  for(let n = 0; n < 20; n ++) {
    westbound.push(new Vehicle(int(random(2))), 1);
  }
}

function draw() {
  background(220);
  draw_road(); // creating a road
  for (let i = 0; i < eastbound.length; i++) { //looping through the items in the index
    eastbound[i].action();  // getting all the cars to move
  }
  for (let i = 0; i < westbound.length; i++) { 
    westbound[i].action(); 
  }
}


//creating the road
let stripespace = 100; //adding a space between lines
function draw_road() {
  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(width / 2, height / 2, width, 500); // the black road in the back
  fill(255);
  for (let w = 0; w < width; w += stripespace) {  //creating a loop to add the dashed lines
    rect(w, height / 2, 60, 10);
  }

}


class Vehicle {
  constructor(type, direction) { //setting the constructor variables
    this.x = random(0, width);
    this.direction = 1;
    if(this.direction === 0){
      this.y = this.y = random(height / 2 - 230, height / 2 - 20);
    }
    else{
      this.y = this.y = random(height / 2 + 230, height / 2 + 20);
    }
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.type = type;
    if (this.direction === 1){
      this.xSpeed = this.xSpeed = int(random(5, 10));
    }
    else {
      this.xSpeed = this.xSpeed = int(random(-5, -10));
    }
    this.chance;
  }
  createCar() {
    // creating the car
    rectMode(CENTER);
    fill(255);
    //wheels
    rect(this.x - 15, this.y + 8, 8, 5);
    rect(this.x + 15, this.y + 8, 8, 5);
    rect(this.x - 15, this.y - 8, 8, 5);
    rect(this.x + 15, this.y - 8, 8, 5);
    //body
    fill(this.color);
    rect(this.x, this.y, 40, 16);
  }
  createTruck(){
    // creating the truck
    rectMode(CENTER);
    //wheels
    fill(255);
    rect(this.x - 25, this.y + 15, 15, 7);
    rect(this.x + 25, this.y + 15, 15, 7);
    rect(this.x - 25, this.y - 15, 15, 7);
    rect(this.x + 25, this.y - 15, 15, 7);
    //body
    fill(this.color);
    rect(this.x, this.y, 80, 30);  
  }
  display() {
    if (this.type === 0) {
      this.createCar();
    }
    else if (this.type === 1) {
      this.createTruck();
    }
    console.log(this.type);
  }
  move() {
    if (this.x <= 0) { 
      this.x += width; 
    }
    if (this.x >= windowWidth) { 
      this.x -= width; 
    }
    this.x += this.xSpeed;
  }
  speedUp() {
    if (this.xSpeed <= 15) {
      this.xSpeed += 1;
    }
  }
  speedDown() {
    if (this.xSpeed >= -15) {
      this.xSpeed -= 1;
    }
  }
  changeColour() {
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }
  action() {
    this.display();
    this.move();
    this.chance = int(random(0, 100));    // is this inclusive? yes it is actually
    if (this.chance === 1) {
      this.speedUp();
    }
    else if (this.chance === 2) {
      this.speedDown();
    }
    else if (this.chance === 3) {
      this.changeColour();
    }
  }
}


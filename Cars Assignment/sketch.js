// Cars Assignment
// Anees Ahmad
// 10/18/2024
// A program that displays a highway of cars going opposite directions.

// creating an array to hold all the car variables
let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  draw_road(); // creating a road
  for (let i = 0; i < cars.length; i++){ //looping through the items in the index
    cars[i].action();  // getting all the cars to move
  }
}

function mouseClicked(){
  cars.push(new Vehicle(int(random(0,1)))); //creating a new car with each click which have a random type
}

//creating the road
let stripespace = 100; //adding a space between lines
function draw_road(){ 
  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(width/2, height/2, width, 500); // the black road in the back
  fill(255);
  for(let w = 0; w < width; w += stripespace){  //creating a loop to add the dashed lines
    rect(w, height/2, 60, 10);
  }

}


class Vehicle{
  constructor(type){ //setting the constructor variables
    this.x = random(0, width); 
    this.y = this.y = random(height/2 - 230, height/2 - 20);
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.direction = int(random(1,0)); 
    this.type = type;
    this.xSpeed;
    this.chance;
  }
  createCar(){
    rectMode(CENTER);
    fill(this.color);
    rect(this.x - 15, this.y+8, - 8, 5, 10);
    rect(this.x + 15, this.y+8, - 8, 5, 10);
    rect(this.x - 15, this.y-8, + 8, 5, 10);
    rect(this.x + 25, this.y-8, + 8, 5, 10);
    fill(255);
    rect(this.x, this.y, 40, 16);

  }
  display(){
    if(this.direction === 1){
      this.xSpeed = int(random(-5,-10));
    }
    if(this.direction===0){
      this.xSpeed = int(random(5,10));
    }
    if(this.type === 0){
      // creating the car
      rectMode(CENTER);
      fill(255);
      //wheels
      rect(this.x - 15, this.y+8, 8, 5);
      rect(this.x + 15, this.y+8, 8, 5);
      rect(this.x - 15, this.y-8, 8, 5);
      rect(this.x + 15, this.y-8, 8, 5);
      //body
      fill(this.color);
      rect(this.x, this.y, 40, 16);
    }
    else if(this.type === 1){
      // creating the truck
      rectMode(CENTER);
      //wheels
      fill(255);
      rect(this.x - 15, this.y+10, 10, 7);
      rect(this.x + 15, this.y+10, 10, 7);
      rect(this.x - 15, this.y-10, 10, 7);
      rect(this.x + 15, this.y-10, 10, 7);
      //body
      fill(this.color);
      rect(this.x, this.y, 60, 20);

    }
    console.log(this.type);
  }
  move(){
    if(this.x <= 0){ this.x = windowWidth; }
    if(this.x >= width){ this.x = windowWidth; }
    this.x += this.xSpeed;
  }
  speedUp(){
    if(this.xSpeed <= 15){
      this.xSpeed += 1;
    }
  }
  speedDown(){
    if(this.xSpeed >= -15){
      this.xSpeed -= 1;
    }
  }
  changeColour(){
    this.color = this.color = color(int(random(0,255), random(0,255), random(0,255)));
  }
  action(){
    this.display();
    this.move();
    this.chance = int(random(0, 100));
    if(this.chance === 1){
      this.speedUp();
    }
    else if(this.chance ===2){
      this.speedDown();
    }
    else if(this.chance ===3){
      this.changeColour();
    }
  }
}
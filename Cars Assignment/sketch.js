// Cars Assignment
// Anees Ahmad
// 10/18/2024
// A program that displays a highway of cars going opposite directions.


let car1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  car1 = new Vehicle(0);
}

function draw() {
  background(220);
  draw_road();
  car1.display();
}

//creating the road
let stripespace = 100; 
function draw_road(){
  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(width/2, height/2, width, 500);
  fill(255);
  for(let w = 0; w < width; w += stripespace){
    rect(w, height/2, 60, 10);
  }

}




class Vehicle{
  constructor(type){
    this.x = random(width/2); 
    this.y;
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.direction = random(1,0); 
    this.type = type;
    this.xSpeed = random(10,15);
    
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
      this.y = random(height/2 - 230, height/2 - 20);
    }
    switch(this.type){
    case "0":
      // creating the car
      rectMode(CENTER);
      fill(255);
      rect(this.x - 15, this.y+8, 8, 5);
      rect(this.x + 15, this.y+8, 8, 5);
      rect(this.x - 15, this.y-8, 8, 5);
      rect(this.x + 25, this.y-8, 8, 5);
      fill(this.color);
      rect(this.x, this.y, 40, 16);
      break;
    case "1":
      // creating the truck
      rectMode(CENTER);
      fill(255);
      rect(this.x - 15, this.y+10, 10, 7);
      rect(this.x + 15, this.y+10, 10, 7);
      rect(this.x - 15, this.y-10, 10, 7);
      rect(this.x + 25, this.y-10, 10, 7);
      fill(this.color);
      rect(this.x, this.y, 60, 20);
    }
  }
  move(){
    this.x = 
  }
}
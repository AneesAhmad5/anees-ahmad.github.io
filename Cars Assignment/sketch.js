// Cars Assignment
// Anees Ahmad
// 10/18/2024
// A program that displays a highway of cars going opposite directions.

// creating two arrays to hold all the variables and differ directions
let TrafficLight1;
let eastbound = [];
let westbound = [];


let framecounter = 0; //used to count frames


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let n = 0; n < 20; n ++) {
    eastbound.push(new Vehicle(int(random(2)), 1));
  }
  for(let n = 0; n < 20; n ++) {
    westbound.push(new Vehicle(int(random(2)), 0));
  }
  TrafficLight1 = new TrafficLight(width/2, 100);
}

function draw() {
  background(220);
  draw_road(); // creating a road
  // getting all the cars to move
  TrafficLight1.display();

  if(TrafficLight1.stop !== true){
    for (let i = 0; i < eastbound.length; i++) { //looping through the items in the index
      eastbound[i].start_cars(); //starting the cars to move
      eastbound[i].action(); 
    }
    for (let i = 0; i < westbound.length; i++) { 
      westbound[i].start_cars(); 
      westbound[i].action(); 
    }
  }
  else{ //stopping the cars if the Traffic Light is on stop.
    for (let i = 0; i < eastbound.length; i++) { //looping through the items in the index
      eastbound[i].stop_cars();
      eastbound[i].action();  
    }
    for (let i = 0; i < westbound.length; i++) { 
      westbound[i].stop_cars();
      westbound[i].action(); 
    }
  }
  //for challenge #2, we need to start the green light after 120 frams
  framecounter ++;
  console.log(framecounter);
  if(framecounter === 120){
    TrafficLight1.green_light();

  }
}

//challenge feature #2:
function keyPressed(){
  if(keyCode === 32){
    framecounter = 0;
    TrafficLight1.red_light(); //starting the red light.
  }
}


//challenge feature #1:
function mouseClicked(){
  if(mouseButton === LEFT){
    if(keyIsPressed && keyCode === SHIFT){
      eastbound.push(new Vehicle(int(random(2)), 1)); //creating a new vehicle with each button press
    }
    else{   
      westbound.push(new Vehicle(int(random(2)), 0));
    }
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
    this.x = random(0, width); // x position
    this.direction = direction; // setting a direction (left = 0, right = 1)
    // Creating an if else statement to regulate the y position of the cars in reference to the line on the road.  
    if(this.direction === 0){
      this.y = this.y = random(height / 2 - 230, height / 2 - 20); // top half
    }
    else{
      this.y = this.y = random(height / 2 + 230, height / 2 + 20); // bottom half
    }
    this.color = color(random(0, 255), random(0, 255), random(0, 255)); // setting each car to a random colour
    this.type = type; // the type of vehicle: car or truck
    // creating an if else statement to regulate the direction each car is going in reference to which side of the road they are on.
    if (this.direction === 1){
      this.xSpeed = this.xSpeed = int(random(7, 13)); //moving to the right
    }
    else {
      this.xSpeed = this.xSpeed = int(random(-7, -13)); //moving to the left
    }
    this.chance;

    //setting a variable telling the cars to stop.
    this.stop = 1;
  }

  createCar() {
    // creating the car
    noStroke();
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
    noStroke();
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
    stroke(0);
    strokeWeight(5);
    //because the truck has a head, it has to change depending on its direction.
    if(this.direction === 0){
      line(this.x-10, this.y + 15, this.x-10, this.y -15);
    }
    if(this.direction === 1){
      line(this.x+10, this.y + 15, this.x+10, this.y -15);
    }
  }
  //displaying both cars and trucks
  display() {
    //either car or truck will show up depending on its type
    if (this.type === 0) {
      this.createCar();
    }
    else if (this.type === 1) {
      this.createTruck();
    }
  }
  //how each car will move
  move() {
    //these if statements make the car loop back across the screen
    if (this.x <= 0) { 
      this.x += width; 
    }
    if (this.x >= windowWidth) { 
      this.x -= width; 
    }
    // move forward by the speed
    if(this.stop !== 0){
      this.x += this.xSpeed;
    }
  }
  //speeding up: 1/100
  speedUp() {
    if(this.direction === 0 && this.stop !== 0){ // if the vehicle is going left then its speed cant go over -15
      if(this.xSpeed > -15){
        this.xSpeed -= 1;
      }
    }
    if(this.direction === 1 && this.stop !== 0){ // if the vehicle is going right then its speed cant go over 15
      if(this.xSpeed < 15){
        this.xSpeed += 1;
      }
    }
  }
  speedDown() {
    if(this.direction === 0 && this.stop !== 0){ // if the vehicle is going left then its speed cant go beneath -5
      if(this.xSpeed < -5){
        this.xSpeed +=1;
      }
    }
    if(this.direction === 1 && this.stop !== 0){ // if the vehicle is going right then its speed cant go beneath 5
      if(this.xSpeed > 5){
        this.xSpeed -= 1;
      }
    }
  }

  //randomized colour change: 1/100
  changeColour() {
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }
  //calling up all the functions in the class.
  action() {
    this.display();
    this.move();

    //setting a variable that will randomly out of 100 come into effect. 
    this.chance = int(random(0, 100));  //0-99
    if (this.chance === 1) {
      this.speedUp();
    }
    else if (this.chance === 2) {
      this.speedDown();
    }
    else if (this.chance === 3) {
      this.changeColour();
    }
    console.log(this.stop);
  }

  //making the cars stop
  stop_cars(){
    this.stop = 0;
  }

  //making the cars start again
  start_cars(){
    this.stop = 1;
  }
}


//challenge feature #2
class TrafficLight {
  constructor(x,y){ //setting the values
    this.x = x;
    this.y = y;
    this.r = 0;
    this.g = color(0,255,0);
    this.stop = false;
  }
  display(){
    rectMode(CENTER);
    fill(0);
    rect(this.x, this.y, 50, 100);
    //red
    fill(this.r);
    circle(this.x, this.y-20, 25);
    //green
    fill(this.g);
    circle(this.x, this.y+20, 25);
  }
  //turns on the green light
  green_light(){
    console.log('greenlight');
    this.r = 0;
    this.g = color(0,255,0);
    this.stop = false;
  }
  //turns on the red light
  red_light(){
    this.stop = true;
    console.log('redlight');
    this.r = color(255, 0, 0);
    this.g = 0;
  }
}


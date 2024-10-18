// Random Name Generator
// Anees Ahmad
// 10/17/2024
// 

let names = ["John", "Jane", "Stefan"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names);
  names.push("Liam");
  print(names);

  let lastname = names.pop();
  print(lastname);
  print(names);

  let firstname = names.shift();
  print(firstname);
  print(names);

  names.push("names1");
  names.push("names2");
  names.push("names3");
  names.push("names4");
  names.push("names5");

  for(n of names){
    print(n);
  }
}

function draw() {
  background(220);
}

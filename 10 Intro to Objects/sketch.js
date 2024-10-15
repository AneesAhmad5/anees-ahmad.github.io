// Intro to Objects
// Anees Ahmad
// 10/10/24


//challend: add 2-3 more books to the bookshelf, then use array to create 10 books and fill a "shelf"





// let shelf = [myBook, myBook2, myBook3, myBook4];

let myBook;
let myBook2;
let myBook3;
let myBook4;


function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("Why I really don't create bombs I swear", "Anees Ahmad", 1234567891011, "leatherbound", 515, width * 0.5); 
  myBook2 = new Book("Daniel is Pretty good at Football", "Anees Ahmad", 1234567891011, "softcover", 415, width * 0.4655);
  myBook3 = new Book("Don't know how Luka made the football team", "Anees Ahmad", 1234567891011, "hardcover", 300, width * 0.52);
  myBook4 = new Book("I should have also made the soccer team", "Anees Ahmad", 1234567891011, "leatherbound", 600, width * 0.44); 
  myBook5 = new Book("MANGO JUICE IS THE BEST", "Anees Ahmad", 1234567891011, "softcover", 600, width * 0.41); 
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
  myBook4.display();
  myBook5.display();
}

class Book {
  //1.constructor
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.coverType = cover;
    this.pageCount = pages;
    this.x = x;
  }
  //2. class methods
  display(){
    //render out book on the screen
    rectMode(CENTER); textAlign(CENTER, CENTER);
    textSize(20);    
    switch(this.coverType){
    case "softcover":
      fill(250,200,150);
      break;
    case "hardcover":
      fill(120,255,255);
      break;
    case "leatherbound":
      fill(150,100,15);
      break;
    } 
    rect(this.x, height/2, this.pageCount/10, 150);
    fill(0);
    text(this.title[0], this.x, height/2 - 50);
  }  
  
  printOut(){
    // print out our data in a nice format
    print(this.title + ", by " + this.author);
    print("Length: " + this.pageCount);
    print("ISBN" + this.isbn);
  }
}

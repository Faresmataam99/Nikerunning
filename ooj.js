 var user = {
   name: "william",
   email: "williamcheval@gmail.com",
   // the word this refers to an object
   login() {
     console.log(this.email, "has logged in");
   },
   logout() {
     console.log(this.email, "has logged out");
   },
 };
 console.log(user.name);

class Car{
  constructor () {
    this.color = 'red';
    this.name = 'toyota';
    this.engine ='v12' ;
  }
  start () {
    console.log
  }
}

class Animal {
  constructor(name, age, type) {
    (this.name = name), (this.age = age), (this.type = type);
  }
  breaths() {
    console.log("the tiger's name");
  }
  eat() {
    console.log("the tiger's age");
  }
}
const tiger = new Animal("tiger", 10, "carnivor");
const lion = new Animal("lion", 20, "carnivor");
const orca = new Animal("orca", 13, "fish");
console.log(tiger);
console.log(orca);

class Rectangular {
  constructor(height,width) {
    this.height = height;
    this.width = width;
    this.area= height * width;
  }
  calculate() {
    console.log("the sum of this rectangular is",area);
  }
  area () {
    return this.height * this.width ;
  }
  isSquare () {
    return this.width == this.height ;
  }
prompt () {
  return this.height + this.width
}
}
const rectangl1 = new Rectangular (20 , 30);
console.log(rectangl1.area);
console.log(rectangl1.isSquare());
// another
class Tv {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }
}

class Movie extends Tv {
  constructor(title, year, genre, duration) {
    super(title, genre, year);
    this.duration = duration;
  }
  about() {
    console.log("i am a Movie");
  }
}

class Show extends Tv {
  constructor(title, genre, year, seasons, episodes) {
    super(title, year, genre);
    this.seasons = seasons;
    this.episodes = episodes;
  }
}
class Anothermovie extends Tv{
  constructor (title, genre,year,seasons,episodes,duration){
    super(title,year,genre);
    this.duration =duration;
  }
}


const movie = new Movie("theoldguard", "thrillingaction", "2020", 1, 120);
console.log(movie);
const anyshow = new Show("vikings", "Action", 2011, 8, 100);
console.log(anyshow);
const secondmovie = new Anothermovie("Topgun:Maverick" , "Action",2020,3,200)
console.log(secondmovie)












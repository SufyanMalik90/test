// // #! /usr/bin/env node
// // import inquirer from "inquirer";
// // import * as Operation from './Operation.js'

import events from "inquirer/lib/utils/events.js";


// // console.log("=======Console Calculator Application=======\n");

// // const answer = await inquirer.prompt([
// //   {
// //     type: "input",
// //     name: "num1",
// //     message: "Enter 1st Number:",
// //   },
// //   {
// //     type: "input",
// //     name: "num2",
// //     message: "Enter 2nd Number:",
// //   },
// //   {
// //     type: "list",
// //     name: "operation",
// //     message: "Choose what do you want?:",
// //     choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Modulas'],
// //   },
// // ]);

// // let number1 = parseFloat(answer.num1);
// // let number2 = parseFloat(answer.num2);

// // let result ;

// // if (answer.operation == 'Addition') {
// //     result = Operation.add(number1, number2)
    
// // }
// // else {
// //     console.log('Invalid Operation');
// //     result;
    
// // }

// // console.log(`Your Result is: ${result}`);

// // class Car {

// //   model : string;
// //   price : string;
// //   year : number;

// //   constructor(model: string, price : string, year : number) {
// //     this.model = model;
// //     this.price = price;
// //     this.year = year;

// //   }
// //   drive() {
// //     console.log("Car is Driving...");
    
// //   }
// //   stop() {
// //     console.log('The car has stoped');
// //   }
// // }

// // const myCar = new Car('Model X','200000',2024 );
// // // myCar.price = '200000';
// // // myCar.model = 'Model X';
// // // myCar.year = 2024;
// // myCar.drive();
// // myCar.stop();


// class Human {
//   name: string;
  
  
//   constructor(name: string){
//       this.name = name;
      
//   }
  
  
// }

// class Animal {
//   name: string;
//   country : string
//   constructor(name: string, country : string){
//       this.name = name;
//       this.country = country;
//   }
  
//   eat(){
//       console.log(this.name + " is a Animal and is eating");
//   }
// }

// class WildAnimal {
//   title: string;
  
//   constructor(title: string){
//       this.title = title;
//   }
  
//   eat(){
//       console.log(this.title + " is a Wild Animal and is eating");
//   }
// }
// class Robot {
//   name: string;
  
//   constructor(name: string){
//       this.name = name;
//   }
  
// }

// let hu = new Human('Ali');
// // let an = new Animal('Parrot');
// let Wild = new WildAnimal('Tiger');
// let robo = new Robot('Tiger');

// let hu2 = hu;
// // hu = an 
// robo = hu

// let hum : Human = new Animal('Lion', 'Pakistan')
// let h: Human = {name:"hello"};
// let isHuman:boolean = h instanceof Human; 
// console.log(isHuman); // false

// class Animal {
//   name:string;
//   constructor(theName: string) { 
//       this.name = theName; 
//   }
//   move(meters: number = 0) {
//       console.log(this.name + " moved " + meters + "m.");
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) { 
//       super(name); 
//   }
//   move(meters = 5) {
//       console.log("Slithering...");
//       super.move(meters);
//   }
//   bite(){
//       console.log("bites");
//   }
// }

// class A {
//   // some properties
// }

// class B {
// // some properties
// }

// class C extends A {

// }

// class D extends C {
//   // A , C
//   // multi level inheritance 
// }

// class E extends A , B {
//   //Multiple inheritance is not allowed
// }
// Private Modifier
// class Animal {
//   private name:string;
//   constructor(theName: string) { 
//       this.name = theName; 
//   }
  
//   move(meters: number) {
//       alert(this.name + " moved " + meters + "m.");
//   }
// }
// // Protected
// var a = new Animal("cat").name;
// console.log(a);

// class Greeter {
//   public greet() {
//     console.log("Hello, " + this.getName());
//   }
//   protected getName() {
//     return "hi";
//   }
// }
 
// class SpecialGreeter extends Greeter {
//   public howdy() {
//     // OK to access protected member here
//     console.log("Howdy, " + this.getName());
//   }
// }
// const g = new SpecialGreeter();
// g.greet(); // OK
// g.getName();

// // Static properties
// class MyClass {
//   static x = 0;
//   a = 5
//   static printX() {
//     console.log(MyClass.x);
//   }
// }
// console.log(MyClass.x);
// MyClass.printX();

// let obj = new MyClass();
// let obj2 = new MyClass();
// obj.a = 12;

//what is abstract?

// medem ans: blue print, new object never created, abstract method , class me jo method hota ha jab abstract method bnaty ha to us sy phly abstract likhty ha. inherit class mn nahi bnana perta, abstract method bnaty ha to hu usko 2sri usmn use krty ha us sy structure code hota ha.
// // interface optional properties
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//   var newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// var mySquare = createSquare({color: "black"});
// console.log(mySquare.area);
// // interfaces_extending
// interface Shape {
//   color: string;
  
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// var square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.a = 5;//Error


// //An interface can extend multiple interfaces, creating a combination of all of the interfaces:

// interface PenStroke {
//   penWidth: number;
// }

// interface Square1 extends Shape, PenStroke {
//   sideLength: number;
// }

// var square1 = {} as Square1;//Alternative syntax for casting
// square1.color = "blue";
// square1.sideLength = 10;
// square1.penWidth = 5.0;

interface Counter {
  (start: number): string;//Note there is no name assigned to the function signature
  interval: number;
  reset(): void;
}

// interface Ot1 {
//   name : string
 
// }

// let obj1 : Ot1 =  {
//   name : 'ABc'
// }

// var c: Counter;
// c(10);
// c.reset();
// c.interval = 5.0;

/*30000 - 2000 1000
    ATM System
        UserName , Password 
      user input >> ABC , 1234
      // Fast Cash >>500 1000 , 3000, 5000
      // Cash Withdraw >> enter amount by user
      // Balance inquirey >> current amount
*/
// mic to on krlo

// Generics function

// function users<T>(data : T) : T{
//     return data
// }

// users(56);

//Generators

function* generatorFn() {
  // 1st step
  yield "first value";
  //2nd Step
  yield "2nd value";

  // 3rd step
  yield "3rd value";
}

let generator = generatorFn();
let next = generator.next();
while(next.done != true) {
  console.log("next >>", next);
  next = generator.next();
  
}

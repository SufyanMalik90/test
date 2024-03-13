// // #! /usr/bin/env node
// // import inquirer from "inquirer";
// // import * as Operation from './Operation.js'
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
while (next.done != true) {
    console.log("next >>", next);
    next = generator.next();
}
export {};

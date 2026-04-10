// Native prototypes = built-in objects in JavaScript that already have prototypes with methods

let obj = {};
// console.log(obj);
// console.log(obj.__proto__ === Object.prototype);

const arr = [10, 20, 30];
arr.push(40)

// console.log(arr.__proto__ === Array.prototype);

// Prototype methods, objects without __proto__

const objt = Object.create(null);
objt.name = "Morgan";

// console.log(objt.name);
// console.log(objt.__proto__);

let animal = {
  eats: true
};

let rabbit = Object.create(animal);

// console.log(rabbit.eats); 

let animal1 = { eats: true };
let rabbit1 = {};

Object.setPrototypeOf(rabbit1, animal1);

// console.log(Object.getPrototypeOf(rabbit1) === animal1); 




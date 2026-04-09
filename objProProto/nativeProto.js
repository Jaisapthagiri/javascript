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



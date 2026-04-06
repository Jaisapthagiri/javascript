// prototype

const parent = {
  role: "admin"
};

const user = {
  name: "jai"
};

user.__proto__ = parent;

// console.log(user.name);
// console.log(user.role); 

// console.log(parent);

// Named func exp

let hello = function func(hi) {
  console.log(`Hello ${hi}`);
}
// hello("Morgan");

const arr1 = [11, 21, 31, 43]
let hasEven1 = arr1.some(n => n % 2 === 0)
// console.log(hasEven1);

const arr = [12, 22, 34, 46]
let hasEven = arr.every(n => n % 2 === 0)
// console.log(hasEven);

const num = Math.floor(Math.random() * 100);
// console.log(num);



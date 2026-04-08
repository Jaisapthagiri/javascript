// map and set diff

// memory allocation

// Object.assing

// Structured Clone

// hasOwnProperty

// arr.some and every

// reduce(Big Concept)

// math rand usage  // check e

const objs = {
    name: "Arthur Morgan",
    age: 32,
    city: "Strawberry",
    language: "English",
    gender: "male",
    asdf: () => {
        return this.name + " " + this.age;
    }
};

// Output will be:

// undefined undefined

// Because:

// this ❌ is NOT objs
// this 👉 points to global (or undefined in strict mode)
 

// weak map & set
// const { name, age} = objs;


// const arr= 

// const [a,w,f,...e] = arr;
// console.log(e);

// commonJS and module diff

// immmediately invoked func exp // indepth

// es

// arr.sort  // indepth


// toJSON


// lexical scope

// function object code

// client & server side run time env 

//what are all in clientside run time

// settimeout in 0milisec

// arrow function

// queueMicrotask()

// console.log("A");
// queueMicrotask(() => console.log("B"));
// console.log("C");

// let a = 10;

// function outer() {

//     let b = 20;

//     function inner() {
//         console.log(a);
//         console.log(b);
//     }

//     inner();
// }

// outer()
// console.log(a);

// console.log(typeof Nan);



//  deeper on call and apply
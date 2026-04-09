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

// immmediately invoked func exp 

// es

// arr.sort

// toJSON

// lexical scope

// function object code

// settimeout in 0milisec

// arrow function

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


// client & server side run time env 

// what are all in clientside run time

//  deeper on call and apply

// let Uname = "Micheal";

let rockStar = {
    Story: "rdr2",
    Protagonist: "Arthur",
    Protagonist2: "John",
    Lead: "Dutch",
    Antagonist: "Micheal",

    // greet(){
    //     console.log(`${Uname}`);
    // },

    get friends() {
        return "friends are " + this.Protagonist + " & " + this.Protagonist2
    },

    set friends(value) {
        [this.Protagonist, this.Protagonist2] = value.split(" ")
    }

}

// console.log(rockStar.greet());

// rockStar.Protagonist="Arthur Morgan"
// rockStar.Protagonist2="John Marston"

// console.log(rockStar.friends);

// console.log(rockStar.friends2);      // check why the error come

// TypeError: rockStar.friends2 is not a function
//     at Object.<anonymous> (D:\js\objProProto\config.js:61:22)
//     at Module._compile (node:internal/modules/cjs/loader:1812:14)
//     at Object..js (node:internal/modules/cjs/loader:1943:10)
//     at Module.load (node:internal/modules/cjs/loader:1533:32)
//     at Module._load (node:internal/modules/cjs/loader:1335:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47


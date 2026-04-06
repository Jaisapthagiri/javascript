// map and set diff

// memory allocation

// Object.assing

// Structured Clone

// hasOwnProperty

// immmediately invoked func exp // indepth

// commonJS and module diff

// arr.some

// arr.sort  // indepth

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


// toJSON

const objs = {
    name: "tennyson",
    age: 15,
    city: "bellwood",
    language: "tamil",
    gender: "male",
    greet() {
        return "The Name is " + this.name + " age is " + this.age;
    }
};

const objs1 = objs;

// console.log(objs);
// console.log(objs1);

// obj copying

const objs3 = {...objs};
objs3.city = "dholakpur";

// console.log(objs);
// console.log(objs3);

// Object.assing
// Structured Clone
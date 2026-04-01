let user = {
    name: "jai"
}

// user = null;
// console.log(user);

let a = {};
let b = {};

class User {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
}

// const a = new User("Jai")
// const b = new User("Some")


// this

const objs2 = {
    name: "tennyson",
    age: 15,
    city: "bellwood",
    language: "tamil",
    gender: "male",

    greet() {
        return "The Name is " + this.name + " age is " + this.age;
    }
};

// console.log(objs2.greet());

function Vals(data, scores) {
    this.data = data,
        this.scores = scores
}

const act = new Vals("name", 30);
console.log(act);


// new

class Objs {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}

const vals = new Objs("Jai",21)

// console.log(vals);

export default function asdf() {
    console.log("Say Hi!!!");
}

// console.log("asdf");
// console.log("asdfasdf");
// console.log("asdfasdfasdf");


function greet(name) {
    console.log(`Welcome, ${this.name}`);
}

function sayHi(name) {
    console.log(`Say Hi, ${name}`);
}

export { greet, sayHi }



function asdf() {
    console.log("Hello");
}

const id = setInterval(() => asdf(), 1000);

setTimeout(() => clearInterval(id), 5000)

const user = {
    name: "Arthur",
    sayHi() {
        console.log(
            "user is " + this.name);
    }
}

const user2 = {
    name: "john",
    age: 12
}

setTimeout(user.sayHi, 1000);
setTimeout(user.sayHi.bind(user), 1000)

const returnUser = user.sayHi.bind(user2)
returnUser()

const fn = user.sayHi.bind(user);
console.log(fn());


// const u1d = {
//     UName : "Master",
//     greet(){
//         return `Hello ${this.UName}`;
//     }
// }

// const A2D = u1d.greet.bind(u1d);

// console.log(A2D());

// console.log(typeof clearTimeout);

// const {asdf,asdfs, ...asdfas} = user;

// {
//     var a = 10
// }
// console.log(a);

// function as1df(){
//     var a =10;
// }
// // console.log(a);
// globalThis.a = 10

// console.log(globalThis);


// bind is used to return the function

const userName = {
    name: "Arthur",
    age: 42,
    greet() {
        return `Hello Mr.${this.name}`;
    }
};
const userName2 = {
    name: "Dutch van der lee",
    age: 42,
};

let f = userName.greet.bind(userName2);

// console.log(f());

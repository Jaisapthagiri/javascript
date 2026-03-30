// Optional Chaining

let user = null;

// console.log(user?.name);

const objs = {
    name: "jai",
    age: "21",
    education: {
        scl: "KNMHSS",
        ug: "KASC",
        pg: "KEC"
    },
    city: "erode",
    state: "TN"
}

// console.log(objs?.education?.ug);

// if (objs && objs.education && objs.education.pg) {
//     console.log(objs.education.pg); 
// }

// symbol

const id1 = Symbol("id")
const id2 = Symbol("id")

const userDetails = {
    name: "max",
    [id1]: 123,
    [id2]: 456
}

// for (let key in userDetails) {
//     console.log(key);
// }

const obj1 = {
    value: 100
}

// console.log(obj1 + 10);

// Prototype

const user1 = {
    greet(){
        console.log("Hello");
    }
}

const user2 = user1;

// user2.greet()

const admin = {};

admin.__proto__ = user1;
admin.greet()

const user3 = {
    role : "user"
} 

const admin1 = Object.create(user3)

admin1.__proto__.role = "admin"

console.log(user3.role);
console.log(admin1.role);


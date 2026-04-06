// "use strict"

// var a = 20;

// console.log(a);
a = 30;

// const obj = {
//     al: () => {
//         return obj.name;
//     },
//     name: "asf",
// };

// console.log(obj.al()); 

// function User(uName,age){
//     this.uName = uName;
//     this.age = age;

//     this.getDetails = function(){
//         return "The name is " + this.uName + " whose age is " + this.age
//     }
// }

// const u1 = new User("Arthur",30);
// console.log(u1.getDetails());

const Ben = {
    userName: "Tennyson",
    age: 15,
    city: "bellwood",
    version: {
        child: "Omnitrix",
        teen: "ultimatrix",
        epic: "omniverse",
    },
    friends: {
        grandFather: "max Tennyson",
        cousine: "Gwen",
        friend: "kevin11",
    },
    aliens: {
        fourarm: "power",
        xlr8: "fast",
        heatblast: "fire",
    },
    ["favourite Enemy"]: "vilgax",

    toString() {
        date: new Date()
    }

};

const asdf = Object.fromEntries(
    Object.entries(Ben).filter(([key]) => key !== "userName")
)

// console.log(asdf);

// const map = new Map();

// const objKey = { id: 1 };

// map.set(objKey, "User Data");

// console.log(map); 

// console.log(map.get(objKey)); 



let wm = new WeakMap();

// let user = {
//     name: "Jai",
//     age: 22,
//     role: "admin"
// }

// wm.set(user,
//     {
//         city: "erode"
//     }
// )

// console.log(user);
// console.log(wm.get(user));

const user = {
    name: "asdf",
    age: 0,
    city: "bellwood",
    language: "tamil",
    gender: "male",
    greet() {
        console.log("The Name is " + this.name + " age is " + this.age);
    }
}

console.log(user.name ?? "jai" );
console.log(user.age || 15 );


// for (let key of Object.keys(objs2)){
//     console.log(key);
// }

// for (let vals of Object.values(objs2)){
//     console.log(vals);
// }

// for (let obs of Object.entries(objs2)) {
//     console.log(obs);
// }

// for(let obj in objs2){
//     console.log(obj);
// }



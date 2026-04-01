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


// for (let key of Object.keys(objs)){
//     console.log(key);
// }

// for (let vals of Object.values(objs)){
//     console.log(vals);
// }

// for (let obs of Object.entries(objs)) {
//     console.log(obs);
// }

// for(let obj in objs){
//     console.log(obj);
// }

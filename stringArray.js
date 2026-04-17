let users = [
    { name: "A", age: 20 },
    { name: "B", age: 15 },
    { name: "C", age: 25 },
    { name: "d", age: 15 }
];

let grouped = users.reduce((acc, val) => {
    acc[val.age] = acc[val.age] || [];
    acc[val.age].push(val);
    return acc;
}, {});

console.log(grouped);


// let adults = users.filter(u => u.age >= 18);

// let names = adults.map(u => u.name);

// let total = users.reduce((acc, u) => acc + u.age, 0);

// console.log(adults);
// console.log(names);
// console.log(total);

// for (let [k, v] of users.entries()) {
//     console.log(k, v);
// }

// for (let k of users.keys()) {
//     console.log(k);
// }

// for (let v of users.values()) {
//     console.log(v);
// }



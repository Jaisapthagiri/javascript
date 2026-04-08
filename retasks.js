// let user = {
//     uName: "Morgan"
// }

// let arr = [ user ];
// user = null;

// let map = new Map();
// map.set(user, "...");
// user = null;

// console.log(map);

// let weak = new WeakMap();
// weak.set(user, "...");
// user = null;

// let obj = {};

// weak.set(obj, "ok")
// weak.set("test", "Whoops");

// console.log(weak);

// const ma = new Map()
// const wm = new WeakMap()

let obj = {
    name: "Jai",
    age: 17
};

obj = Object.fromEntries(
    Object.entries(obj).filter(
        ([key]) => key !== "age"
    )
)

obj = {}

console.log(obj);

// ma.set(obj, {
//     role: "admin",
//     active: true
// });

// wm.set(obj, { role: "admin" })

// obj = null;
// console.log(ma);
// console.log(wm.get(obj));
// console.log(wm.has(obj));


// const ads = [1,2,3,4,5,6,7,81]
// const ar1 = []

// ads.forEach(item => {
//     if (item % 2===0){
//         ar1.push(item)
//     }
// })

// console.log(ar1);

// (function(){
//     console.log("Say Hai");
// })();

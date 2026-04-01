const objs = {
    name: "tennyson",
    age: 15,
    city: "bellwood",
    language: "tamil",
    gender: "male",
    date: new Date()
};


let a = JSON.stringify(objs, function (key, value) {
    if (key === "date") {
        return new Date().toLocaleDateString();
    }
    return value;
}, 2);

// console.log(a);

let b = JSON.parse(a);
// console.log(b);


const copy = JSON.parse(JSON.stringify(objs))
// console.log(copy);

let room = {
    no: 23
}

let meetup = {
    title: "conference",
    participants: ["Ally", "Solly", "John"]
}

meetup.room = room;

// with replacer
// console.log(JSON.stringify(meetup,["title"],2));

// console.log(JSON.stringify(meetup,function(key, value){
//     if(key === "title") return undefined;
//     return value;
// },2));


let a = 10;
let b = a;
b = 20;

// console.log(a);
// console.log(b);

const objs = {
    a: "name",
    b: "age",
    c: "city",
}

const objs1 = objs;

objs1.c = "address";

delete objs1.c;
// console.log(objs);
// console.log(objs1);

// console.log("a" in objs1); // check prop exist
// console.log(objs["a"]);    // backet notation

objs.d = "new one"
// console.log(objs);
delete objs1.d;
// console.log(objs1);

const objs2 = {
    "name": "tennyson",
    "age": 15,
    "city": "bellwood",
    "language": "tamil",
    "gender": "male",
    greet() {
        return "The Name is " + this.name + " age is " + this.age;
    }
}

// console.log(objs2.greet());
// console.log("A" , "B");
// console.log(("A" , "B"));


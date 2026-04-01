const objs = {
    a: "name",
    b: "age",
    c: "city",
};

delete objs.c;

console.log(objs);

console.log("a" in objs);

console.log(objs["a"]);

objs.d = "new one";

console.log(objs);

console.log(objs);


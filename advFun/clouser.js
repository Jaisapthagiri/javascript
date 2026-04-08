// hoisting

// calc(5, 8)

function calc(a, b) {
    console.log(a * b);
}

// closure

function outer() {
    let name = "John Marston";
    let a = 1

    return function inner() {
        console.log(name);
        a++;
        console.log(a);
    };
};

const asd = outer();
// asd();

// console.log(ab);
var ab = 10;
// console.log(ab);
``
let ot = outer()
ot()
ot()
ot()
// hoisting

// calc(5, 8)

function calc(a, b) {
    console.log(a * b);
}

// closure

function outer() {
    let name = "John Marston";

    return function inner() {
        console.log(name);
    };
};

const asd = outer();
// asd();

// console.log(ab);
var ab = 10;
// console.log(ab);

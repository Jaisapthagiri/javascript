// functions

// with para
function userStatus(isLoggedIn) {
    if (!isLoggedIn) {
        console.log("Not Logged in");
    } else {
        console.log("Logged in");
    }
}
userStatus(false);

// without para
function greet() {
    console.log("Greet");
}
greet();

// para with default values
function calcTotal(price = 10, tax) {
    let total = price + (price * tax / 100);
    console.log(`totalPrice : ${total}`);
}
calcTotal(undefined, 23);

// expression

const val = (stock, price) => {
    console.log(stock * price);
}
val(6, 5);

// arrow function

function works(p, q) {
    return p + q;
}

let add = (price, quantity) => {
    console.log(works(price, quantity));
}

add(10, 20);
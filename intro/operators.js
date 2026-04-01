// arithmetic

let a = 20, b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);


// assignment

let c = 20, d = 30;

// console.log(e=d);
// console.log(e+=d);
// console.log(e-=d);
// console.log(e*=d);
// console.log(e/=d);


// comparsion

let e = 5, f = "5", g = 4;

// console.log(e == f);
// console.log(e === f);
// console.log(e != f);
// console.log(e !== f);
// console.log(e > f);
// console.log(e < f);
// console.log(e <= f);
// console.log(e >= f);


// Logical 

// console.log(true && false);
// console.log(true || false);
// console.log(!true);


// unary

let x = 10;

// console.log(x--);
// console.log(--x);
// console.log(x++);
// console.log(++x);
// console.log(typeof x);
// console.log(+"");


// operator precedence

// console.log(1 + 2 * 2 % 4);
// console.log(1 + 2 * (2 % 4));


// ternary


let mark = 36;

// console.log(mark >= 90 ? "O Grade" : mark >= 80 ? "Distinction" : mark >= 60 ? "first class" : mark >= 40 ? "second class" : "Fail");


// switch

function add(...mark) {
    let tot = 0;

    for (let m of mark) {
        tot += m;
    }

    return tot;
}

let tot = add(90, 40, 50, 60, 30)
console.log(tot);


switch (tot) {
    case tot >= 490:
        console.log("Tution Fee Free");
        break;
    case tot >= 470:
        console.log("90% Tution Fee Free");
        break;
    case tot >= 450:
        console.log("80% Tution Fee Free");
        break;
    case tot >= 420:
        console.log("70% Tution Fee Free");
        break;
    default:
        console.log("No Discount allwed");
}


// decorator

function greet(name) {
    return `Hello ${name}`;
}

function decorator(greet) {
    return function (name) {
        console.log("calling");
        return greet(name)
    }
}

const callingFun = decorator(greet)
// console.log(callingFun("Arthur"));


// forwarding

function calling(a, b) {
    return a + b;
}

function wrapper(fn) {
    return function (...args) {
        return fn(...args)
    }
}

const warpped = wrapper(calling)
// console.log(warpped(2, 3));


// call

const objec = {
    uName: "Arthur",
    lName: "Morgan",
    work: "rdr2",
    greet(msg) {
        return `${msg} Mr.${uName} ${lName} `
    }
}

console.log(objec.greet.call(objec, "Hello"))
console.log(objec.greet("Hello"));


// apply

const stud = {
    name: "Max",
    tot(...vals) {
        let sum = 0;
        for (let i = 0; i < vals.length; i++) {
            sum += vals[i]
        }
        return sum
    },
    get marks(){
        return `${this.name} obtained ${this.tot(...arr)}`
    }
}

const arr = [80, 89, 75, 85, 86, 90]

// console.log(stud.tot.apply(stud, arr))
// console.log(stud.marks);

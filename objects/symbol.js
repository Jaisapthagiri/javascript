const id1 = Symbol("id")

const userDetails = {
    name: "max",
    [id1]: 123,
}

// for (let key in userDetails) {
//     console.log(userDetails[key]);
// }

const obj1 = {
    value: 100
}

// console.log(obj1 + 10);


// obj to Pri

const objToPri = {
    value: 30
}

// console.log(objToPri + 10);

const objToPri1 = {
    value: 30,
    valueOf() {
        return this.value;
    }
}

// console.log(objToPri1 + 10);

const objToPri2 = {
    value: "asdf",
    toString() {
        return this.value;
    }
}

// console.log(objToPri2 + "ghjk");

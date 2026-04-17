function* generator() {
    yield 1;
    yield 2;
    return 3
}

// let one = generator()
// let two = one.next()
// let three = one.next()

// console.log(one.next());
// console.log(two);
// console.log(three);


let seq = generator();

for (let val of seq) {
    console.log(val);
}
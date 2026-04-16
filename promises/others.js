console.log("1");

setTimeout(() => console.log("2 - macrotask"), 0);

async function test() {
    console.log("3");

    await Promise.resolve(); // goes to microtask

    console.log("4 - after await (microtask)");
}

test();

Promise.resolve().then(() => console.log("5 - microtask"));

console.log("6");
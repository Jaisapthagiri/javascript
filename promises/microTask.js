// let promise = Promise.resolve();

// promise.then(() => console.log("promise done!"));

// alert("code finished");

console.log("1");

setTimeout(() => console.log("macrotask-2"), 0);

Promise.resolve().then(() => console.log("microtask-3"));

console.log("4");
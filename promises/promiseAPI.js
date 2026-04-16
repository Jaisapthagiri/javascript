// all

const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
const p2 = Promise.reject("Error in p2");
const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.log("Error:", err));

const safePromise = [p1, p2, p3].map(p => p.catch(err => err));

// Promise.all(safePromise)
//     .then(res => console.log(res));


// allSettled

// Promise.allSettled(safePromise)
//     .then(res => console.log(res));

// race

// const pr1 = new Promise((res, rej) => setTimeout(() => rej("A"), 500));
// const pr2 = new Promise((res, rej) => setTimeout(() => res("B"), 2000));

// Promise.race([pr1, pr2])
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// any

const pa1 = new Promise((res, rej) => setTimeout(() => rej("A is failed"), 5000));
const pa2 = new Promise((res, rej) => setTimeout(() => res("B is failed"), 4000));
const pa3 = new Promise((res, rej) => setTimeout(() => res("c is passed"), 2000));

Promise.any([pa1, pa2, pa3])
    .then(res => console.log(res))
    .catch(err => console.log(err));


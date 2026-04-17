// console.log("1");

// setTimeout(() => console.log("2 - macrotask"), 0);

// async function test() {
//     console.log("3");

//     await Promise.resolve();

//     console.log("4 - after await (microtask)");
// }

// test();

// Promise.resolve().then(() => console.log("5 - microtask"));

// console.log("6");

// // // // // // // // // 

const wait = (sec) =>
    new Promise(res =>
        setTimeout(() => {
            console.log("waiting");
            res();
        }, sec)
    );

const asdf = async () => {
    console.log("asdf1");

    await wait(3000);

    console.log("asdf2");
}

asdf();
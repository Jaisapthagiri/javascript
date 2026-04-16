// handle async work cleanly and avoid callback mess

// let prom = (password) => {
//     return new Promise((resolve, reject) => {
//         if (password === 1234) {
//             resolve("Valid password for admin")
//         }
//     })
// }

// prom("1234")
//     .then(res => console.log(res))

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let dogWalked = true;

            if (dogWalked) {
                resolve("walking completed");
            } else {
                reject("Dog is sleeping");
            }

        }, 1500);
    });
};

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let kitchenCleaned = false;

            if (kitchenCleaned) {
                resolve("Cleaned the kitchen");
            } else {
                reject("Must Clean it before moving to next");
            }

        }, 2000);
    });
};

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let cleanedKitchen = true;

            if (cleanedKitchen) {
                resolve("Trash Cleaned");
            } else {
                reject("Need to clean");
            }

        }, 2500);
    });
};

// walkDog()
//     .then(value => { console.log(value); return cleanKitchen(); })
//     .then(value => { console.log(value); return takeOutTrash(); })
//     .then(value => { console.log(value); console.log("completed"); })
//     .catch(err => console.error(err));


// without new

const p = Promise.resolve("Hello Promise");
p.then(res => console.log(res));

function checkNum(num) {
    if (num > 5) {
        console.log("Processing");
        setTimeout(() => {
            return Promise.resolve("Big Number");
        }, 2000);
    } else {
        setTimeout(() => {
            return Promise.reject("Small Number");
        }, 2000);
    };
};

checkNum(3)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    
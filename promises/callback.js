// callback - A callback is just a function you pass inside another function, used to handle async operations

// function doTask(callback) {

//     console.log("Task Started...");

//     setTimeout(() => {
//         console.log("Task Finished...");
//         callback();
//     }, 5000);

// }

// doTask(() => {
//     console.log("Task Executed...");
// }, 2000);

// function doTask(callback, delay) {
//     console.log("Task Started...");

//     setTimeout(() => {
//         console.log("Task Finished...");
//         callback();
//     }, delay);

// }

// doTask(() => {
//     console.log("Task Executed...");
// }, 2000);


// greet(sayHi);

function greet(callback) {
    console.log("SayHi is going to exec");
    callback()
    console.log("function exec finished");
}

function sayHi() {
    console.log("This is the callback function");
}


// calc(showRes, 5, 10)

function calc(callback, a, b) {
    let result = a + b;
    callback(result)
}

function showRes(res) {
    console.log(res);
}

// nested callback

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 1000);
};

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();
    }, 1000);
};

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 done");
        callback();
    }, 1000);
};

// step1(() => {
//     step2(() => {
//         step3(() => {
//             setTimeout(() => {
//                 console.log("All steps done...");
//             }, 3000);
//         });
//     });
// });

function getUser(callback) {
    setTimeout(() => {
        console.log("User Fetched");
        callback({ id: 6, name: "Max" });
    }, 2000);
};

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("Order Fetched for the", "userId is ", userId);
        callback(["Order 1, Order 2"]);
    }, 1000);
};

function getPayment(orders, callback) {
    setTimeout(() => {
        console.log("Payment Success", "The orders are ", orders);
        callback("Success");
    }, 1000);
};

getUser((user) => {
    getOrders(user, (order) => {
        getPayment(order, (status) => {
            console.log("Payment status:", status);
        });
    });
});



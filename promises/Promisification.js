function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 3000);
    });
};

// getData().then(res => console.log("Data Passed"));

function getDatas(cb) {
    setTimeout(() => {
        cb(null, "Hello");
    }, 2000);
};

function getDataPromise() {
    return new Promise((res, rej) => {
        getDatas((err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
};

getDataPromise()
    .then(data => console.log(data))
    .catch(err => console.log(err));


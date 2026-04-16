let num = 0;

try {
    if (num === 0) {
        console.log("cant divide by 0");
    }
} catch (err) {
    console.log("divide");
} finally {
    console.log("Executed");
}

const arr = [1, 2, 3, 4, 5, 6, 7]

// try {
//     console.log(arr[8].toString());
// } catch (error) {
//     console.log("cant access undefined");
// }

let data = {
    "name": "Arthur Morgan",
    "game": "Red Dead Redemption 2",
    "developer": "Rockstar Games",
    "role": "Protagonist",
    "age": 36,
    "skills": [
        "Gun fighting",
        "Horse riding",
        "Hunting"
    ]
}

// try {
//     // let user = JSON.parse(data);
//     let user = data;
//     if (!user.bornDate) {
//         throw new SyntaxError("Incomplete data: No bornDate");
//     }
//     console.log(user.bornDate);
// } catch (err) {
//     if (err instanceof SyntaxError) {
//         console.log(err.message);
//     } else {
//         throw err;
//     }
//     console.log(err.name);
//     console.log(err.message);
//     // console.log(err.stack);
// }

// console.log(JSON.stringify(data,null,2))
// console.log(JSON.stringify(data));



// for

for (let i = 0; i <= 10; i++) {
    // console.log(i);
}

let output = "";

for (let i = 0; i <= 10; i++) {
    output += i + " "
}

// console.log(output);

// console.log(typeof output);


let arr = [10, 20, 40, 30, 50, 70];

// for(let val of arr){
//     console.log(val);
// }


// while

let ma = 50;
while (ma >= 10) {
    if (ma % 4 == 0) {
        console.log(ma);
    }
    ma--;
}

// while(true){
//     age = prompt("Enter your age")
//     if(confirm("Are you sure to confirm you age as " + age)){
//         alert("Age is " + age)
//         break
//     }else{
//         alert("try again")
//     }
// }


// do while

let password;

do {
    password = +prompt("Enter password", "Hint in number")
} while (password !== 1234)
console.log("Not Logged in ");   

// function asdf(){
//     console.log("Hello");
// }

// const id = setInterval(()=>asdf(),1000);

// setTimeout(() => clearInterval(id),5000)

const user = {
    name: "Arthur",
    sayHi() {
        console.log(
            "user is " + this.name);
    }
}

// setTimeout(user.sayHi, 1000);
// setTimeout(user.sayHi.bind(user), 1000)

// const fn = user.sayHi.bind(user);
// console.log(fn());



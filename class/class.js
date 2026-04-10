class User {

    constructor(uName, uEmail, uPassword) {
        this.uName = uName;
        this.uEmail = uEmail;
        this.uPassword = uPassword;
    }

    gety = () => {
        return `Hello ${this.uName}`;
    }

    // on here the method is created everytime for creating a new object
    greetUser() {
        return `Hello ${this.uName}`
    }

    getUserDetails() {
        return `User Name is ${this.uName}, email is ${this.uEmail} and password is ********`
    }

    // getter and setter

    get uName() {
        return `${this._uName}`
    }

    set uName(value) {
        if (value.length < 4) {
            console.log("Insufficient chars!");
            return;
        }
        this._uName = value
    }

}

// const u1 = new User("Ar", "arthur@gmail.com", "1q42sfr854g");
const u2 = new User("John", "john@gmail.com", "234fs42rfsa");
const u3 = new User("Dutch", "ducth@gmail.com", "p9lj98bkjj");

// console.log(u1.getUserDetails());
// console.log(u2.greetUser());
// console.log(u3.getUserDetails());

// console.log(typeof User);
// console.log(typeof u1);

// use this prototype to get only one copy in memory

// User.prototype.greet = function () {
//     return `Hello ${this.uName} ${this.uEmail}`;
// }

// console.log(u1.greet());
// console.log(User.prototype.greet);


// console.log(u3.gety());
console.log(this === u3);

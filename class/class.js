class User {

    constructor(uName, uEmail, uPassword) {
        this.uName = uName;
        this.uEmail = uEmail;
        this.uPassword = uPassword;
    }

    gety() {
        return `Hello ${this.uName}`;
    }

    greetUser() {
        return `Hello ${this.uName}`;
    }

    getUserDetails() {
        return `User Name is ${this.uName}, email is ${this.uEmail} and password is ${"*".repeat(this.uPassword.length)}`;
    }

    get uName() {
        return this._uName;
    }

    set uName(value) {
        if (value.length < 4) {
            throw new Error("Username must be at least 4 characters");
        }
        this._uName = value;
    }

    static isValidUser(user) {
        return user.uEmail.includes("@");
    }
}


// usage
const u2 = new User("John", "john@gmail.com", "234fs42rfsa");
const u3 = new User("Dutch", "ducth@gmail.com", "p9lj98bkjj");

console.log(u2.gety());
console.log(u3.getUserDetails());
console.log(User.isValidUser(u2));
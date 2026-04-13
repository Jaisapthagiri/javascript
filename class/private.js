class User {
    #password;

    constructor(password) {
        this.#password = password;
    }

    check(pass) {
        return this.#password === pass;
    }

    verifyPassword(pass) {
        return this.#password === pass;
    }

    #userPass() {
        return this.#password;
    }

    getPass(){
        return this.#userPass();
    }
}

class UserData extends User {

    constructor(name, email, password) {
        super(password);
        this.name = name;
        this.email = email;
    }

    showPassword(pass) {
        return this.verifyPassword(pass);
    }

}

const u1 = new User("1234")
const u = new UserData("Jai", "jai@gmail.com", "1234");

// console.log(u.showPassword("1234"));
// console.log(u.getPass());
console.log(u1.getPass());

class User {

    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    static data = "asdf";

    static isValidEmail(email) {
        return email.includes("@");
    }

}

// console.log(User.data);
// console.log(User.isValidEmail("asdf@gmail.com"));

class Admin extends User {
    static isValidEmail(email) {
        return email.includes("admin");
    }
}

console.log(Admin.data);
console.log(Admin.isValidEmail("admin@gmail.com"));

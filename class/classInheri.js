// extends

class User {

    constructor(name, email, desc) {
        this.name = name;
        this.email = email;
        this.desc = desc;
    }

    getUserDesc() {
        return `User Details Name: ${this.name}, email: ${this.email}, desc: ${this.desc}`;
    }

    greet() {
        return `Welcome user`;
    }

    good() {
        return "good"
    }

    welcome() {
        return "Welcome man"
    }

}

class UserData extends User {

    constructor(name, email, desc, role, age) {
        super(name, email, desc);
        this.role = role;
        this.age = age;
    }

    getFullDetails() {
        return `the details about the user is ${this.getUserDesc()} whose role is ${this.role} and age is ${this.age}`;
    }

    greet() {
        return `welcome ${this.name}`;
    }

    good() {
        return super.good()
    }

}

class UD extends UserData {
    constructor(name, email, desc, role, age, responsive) {
        super(name, email, desc, role, age);
        this.responsive = responsive;
    }

    responsiveness() {
        return "this responsive is good";
    }

    welcome() {
        return super.welcome()
    }

}

const u1 = new UserData("Jack", "jack@gmail.com", "Developer", "Admin", 22);
// console.log(u1.greet());

// console.log(u1.getFullDetails());
// console.log(u1.greet());

const data = new UD("John", "john@gmail.com", "cloud", "user", 25, "no responsive")
console.log(data.welcome());
// Mixin = a way to reuse code without using inheritance

let eventListen = {
    emit(event) {
        return `Event ${event} by ${this.name}`;
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    getUserName() {
        return this.name
    }
}

Object.assign(User.prototype, eventListen);

const user = new User("Max");
// console.log(user.emit("Login"));


const canEat = {
    eat() {
        console.log("Eating...");
    }
};

const canWalk = {
    walk() {
        console.log("Walking...");
    }
};

class Person { }

// class Person extends canEat, canWalk { }

Object.assign(Person.prototype, canEat, canWalk);

const p = new Person();
p.eat();
p.walk(); 
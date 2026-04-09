//  __proto__       // belongs to object, it is the actual link

let animal = {
    eats: true
};

let rabbit = {
    runsFast: true
};

rabbit.__proto__ = animal;

// console.log(rabbit.eats);
// console.log(rabbit.runsFast);

rabbit.fast = function color() {
    console.log(color.name + " are of black and white");
}

// rabbit.fast()

const humans = {
    haveName: true,
    walk() {
        return "Yes they can walk and run"
    }
}

const man = {
    gender: "male",
    __proto__: humans
}

const women = {
    gender: "female",
    __proto__: man
}

// console.log(women.gender);
// console.log(women.walk());

let user = {
    fName: "Alok",
    lName: "S",
    role: "user",

    get fullName() {
        return `${this.fName} ${this.lName} and role is ${this.role}`
    },

    set fullName(value) {
        [this.fName, this.lName] = value.split(" ")
    }
}

let admin = {
    role : "admin",
    __proto__ : user
}

// admin.fName = "Arthur"
// admin.lName = "Morgan"

// console.log(admin.fullName);
// console.log(admin.hasOwnProperty("fName"));

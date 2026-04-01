const user1 = {
    greet(){
        console.log("Hello");
    }
}

const user2 = user1;

// user2.greet()

const admin = {};

admin.__proto__ = user1;
admin.greet()

const user3 = {
    role : "user"
} 

const admin1 = Object.create(user3)

admin1.__proto__.role = "admin"

console.log(user3.role);
console.log(admin1.role);


// Object Iterable

const user = {
    "userName": "tennyson",
    "age": 15,
    "city": "bellwood",
    "language": "tamil",
    "gender": "male",
    greet() {
        return "The Name is " + this.name + " age is " + this.age;
    }
}

for (let key in user) {
    console.log(key);
}


for (let key in user) {
    console.log(key + " : " + user[key]);
}


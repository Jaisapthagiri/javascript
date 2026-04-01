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

const { userName, age, city, ...others } = user;
// destruct with objs

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

// spread

const { userName, age, city, language, gender, greet } = user;

// rest

const { ...userDetails } = user;

// spread and rest

const { uName, ...uDetails } = user;

// destruct with arr

let data = [10, 2, 30, 4, 78, 100, 65, 79, 96, 250, 25, 4, 55, 69, 69, 2, 0, 2, 33, 24, 35, 25, 55, 65];

let copyData = [...data]
// console.log(copyData);

let [a, dd, ...cf] = data;

// console.log(cf);
// console.log(a);
// console.log(dd);
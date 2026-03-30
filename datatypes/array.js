// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr[0]);
// console.log(arr[-1]);
// arr[1] = 100;
// console.log(arr);
// console.log(arr.length);
// arr.push(200);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(0)
// console.log(arr);
// console.log(arr.includes(5));
// console.log(arr.indexOf(5));

let b = [10, 2, 30, 4, 78, 100, 65, 79, 96, 250, 25, 4, 55, 69, 69, 2, 0, 2, 33, 24, 35, 25, 55, 65];
// console.log(b.slice(2,6));
// console.log(b.splice(1,5));
// console.log(b);

// For Each

c = []
b.forEach((item, index) => {
    c.push(item * 2);
})
console.log(c);

// map - transform items into new array

let price = [100, 200, 300, 400, 500];
let vals = price.map(p => p + p * 0.02)
console.log(vals);

// filter - select only needed item and return new array

let price1 = [10, 20, 30, 40, 50, 60, 70, 80];
let val1 = price1.filter(p => p % 4 == 0);
console.log(val1);

price1.filter(p => p % 4 == 0);
console.log(price1);

let popul = [12023, 34320, 12343, 12321, 54778];
let tot = popul.reduce((acc, val) => acc + val, 0);
console.log(tot);

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

const {userName, age, city, ...others} = user;

console.log(userName);
console.log(age);
console.log(city);
console.log(others);


for(let key in user){
    console.log(key + " : " +  user[key]);
}

let data = [10, 2, 30, 4, 78, 100, 65, 79, 96, 250, 25, 4, 55, 69, 69, 2, 0, 2, 33, 24, 35, 25, 55, 65];

for(let val of data){
    console.log(val);
}

let copyData = [...data]
console.log(copyData);

let [a, dd, ...cf] = data;

console.log(cf);
console.log(a);
console.log(dd);



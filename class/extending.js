class MyArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

const arr = new MyArray();
// console.log(arr.isEmpty());

let filArr = arr.filter(item => item >= 10);
// console.log(filArr);
// console.log(filArr.isEmpty());


// instanceOf

class Rabbit {
    showRabbit() {
        return "This is rabbit";
    }
}

const rabi = new Rabbit();
console.log(rabi instanceof Rabbit);


class Animal {}
class Dog extends Animal {}

const d = new Dog();

// console.log(d instanceof Dog);    
// console.log(d instanceof Animal); 
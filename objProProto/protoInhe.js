// f.prototype  
    
    // belongs to function, it is the template or blueprint
    // place where shared methods live for all objects created using that function

function Person(name, age=30){
    this.name = name,
    this.age = age
}

Person.prototype.greet = function(){
    return `${this.name}, who is ${this.age}'s age.`
}

const p1 = new Person("Arthur",32);
const p2 = new Person("John");

console.log(p1.greet());
console.log(p2.greet());

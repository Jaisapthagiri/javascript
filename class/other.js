class Animal {
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }

    static fastAnimal(A,B){
        return A.speed - B.speed;
    }
}

let animals = [
    new Animal("cheetha", 250),
    new Animal("hyna", 200)
]

animals.sort(Animal.fastAnimal)
// console.log(animals);

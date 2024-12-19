let decimal: number = 6.5;
let integer: number = 42;
console.log(decimal, " + ", integer);

let firstName: string = 'John';
let lastName: string = 'Doe';

console.log(firstName, "+", lastName);

let flag: boolean = false;
console.log("status of the flag", flag);
let numbers: number[] = [1, 2, 3, 4, 5, 6.5]
console.log(numbers);

let fruits: Array<string> = ['apple', 'banana', 'orange'];
console.log(fruits);

let tupleExample: [string, number] = ['Hello', 10];

console.log(tupleExample);

enum Color{
    Red,
    Green,
    Blue,
}

let c: Color = Color.Blue;
console.log(c);

function add(a: number, b: number): number{
    return a + b;
};
console.log(add(3, 4));

function greet(name: string, greeting?: string) {
    if(greeting){
        console.log(`${greeting}, $(name)!`);
    } else (
        console.log(`Hello, ${name}`)
    )
};

greet('Amy', 'Thank You');
greet('Alice');

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(): void;
}

const person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

person.greet();

class PersonClass {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

const obj = new PersonClass('X', 'Y', 30);
obj.greet();

const obj2 = new PersonClass('XX', 'YY', 40);
obj2.greet();


interface Animal{
    name:string;
    age: Number;

    constructor(animalName: string, animalAge: number){
        this.name = animalName;
        this.age = animalAge;
    }
    makeSound(): void{
        console.log("animal make a sound");
    }
}

class Dog extends Animal{
    breed: string;
    constructor(animalName: string, animalAge: number; breed: string){
        super(animalName, animalAge);
        this.breed = breed;
    }
    fetch(): void {
        console.log(`${this.name} is fetching`);
    }
}

class Cat extends Animal{
    color: string;
    constructor(animalName: string, animalAge: number, color: string){
        super(animalName, animalAge);
        this.color = catColor;
    }
}

purr(): void {
    console.log(`${this.name} is purring`);
}

let myDog = new Dog ("Buddy", 5, "Lab"):
myDog.fetch();
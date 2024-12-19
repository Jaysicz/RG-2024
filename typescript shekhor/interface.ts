interface Animal{
    name:string;
    age: Number;
    makeSound(): void;
}

    constructor(animalName: string, animalAge: number){
        this.name = animalName;
        this.age = animalAge;
    }
    makeSound(): void{
        console.log("animal make a sound");
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

class Fish implements Animal{
    this.color = catColor;
    this.name = animalName;
    this.age = animalAge;
    
    
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

let myBird = new BiquadFilterNode("Buddy, 5 , "Lab");
    mybird.makeSound();

    let myFish - new Fish ("ASD", 5, "grey");
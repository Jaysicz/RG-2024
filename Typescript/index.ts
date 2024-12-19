
    let x:number = 4;
    let y:number = 10;
    console.log(x + y);
    console.log('this is programming');


    let a: any = 3;
    a = true;
    a = "dddd"
     let arr = [23, true, "eeee"]
     let names: string[] = ["haben, peter, kushan, jay"]
     let numbers: Array<number> = [23, 11, 55, 66, 33]
    //  Index
    console.log(numbers[2]); 55
    let person = {name: "John Wick", age: 23, country: "US"}
    // key
    console.log(person['age']);
    console.log(person.age);
    let car1 ={ model:'Nsisan', doors:3, isElectric: false};

    class car{
        model: String;
        doors: number;
        isElectric: Boolean;

        // contructor
        constructor(model: string, doors: number, isElectric: boolean){
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    // other methods
    displayMake(): void{
        console.log('the car make is' + this.model);

    }
}

let car2 = new car("mazda", 4, true)
let car3 = new car("toyota", 6, false);

car3.displayMake();
car2.displayMake();

// SportsCar is the child class and car is the parent class
class sportscar extends car{
    wheelDiameter: number;

    constructor(model:string, doors: number, elElectric: boolean, wheelDiameter: number){
        super(model, doors, isElectric); //super metghod refers tot he parent class constuctor
        this.wheelDiameter = wheelDiameter;
    }
}

let car4 = new sportscar("Ferrari")
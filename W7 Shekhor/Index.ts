class Shape {
    name: string;
    constructor(shapeName: string) {
      this.name = shapeName;
    }
    getName(): string {
      return this.name;
    }
    calculateArea(): number {
      return 0;
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(rectangleWidth: number, rectangleHeight: number) {
      super("rectangle");
      this.width = rectangleWidth;
      this.height = rectangleHeight;
    }
    calculateArea(): number {
      return this.width * this.height;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(circleRadius: number, circleName: string) {
      super(circleName);
      this.radius = circleRadius;
    }
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  let rectangle = new Rectangle(5, 10);
  let area = rectangle.calculateArea();
  console.log("Area of the rectangle:", area)

function logged(constructor: Function){
    console.log(`class ${constructor.name} was intiated`)
}

 @logged
  class MyClass{
    constructor(){
        console.log('Inside my class constructor');
    }
  }

  let instance = new MyClass();
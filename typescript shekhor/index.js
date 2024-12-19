var decimal = 6.5;
var integer = 42;
console.log(decimal, " + ", integer);
var firstName = 'John';
var lastName = 'Doe';
console.log(firstName, "+", lastName);
var flag = false;
console.log("status of the flag", flag);
var numbers = [1, 2, 3, 4, 5, 6.5];
console.log(numbers);
var fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
var tupleExample = ['Hello', 10];
console.log(tupleExample);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
function add(a, b) {
    return a + b;
}
;
console.log(add(3, 4));

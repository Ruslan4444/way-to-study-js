// Conversion to numbers
const valueA = "5";
console.log(Number(valueA)); //5
console.log(typeof Number(valueA)); //"number"

const valueB = "random string";
console.log(Number(valueB)); //NaN
console.log(typeof Number(valueB)); //"number"

// The Number.parseInt() method parses an integer from the string.
console.log(Number.parseInt("5x")); //5
console.log(Number.parseInt("12qwe74")); //12
console.log(Number.parseInt("12.4qwe79")); //12
console.log(Number.parseInt("qweqwe")); //NaN

// The Number.parseFloat() method parses a fractional number from the string.
console.log(Number.parseFloat("5x")); //5
console.log(Number.parseFloat("12qwe74")); //12
console.log(Number.parseFloat("12.46qwe79")); //12.46
console.log(Number.parseFloat("qweqwe")); //NaN

// Check if a value is a number
const validNumber = Number("51"); //51
console.log(Number.isNaN(validNumber)); //false

const invalidNumber = Number("qweqwe"); //NaN
console.log(Number.isNaN(invalidNumber)); //true

// Adding floating-point numbers
console.log(0.1 + 0.2 === 0.3); //false
console.log(0.1 + 0.2); //0.30000000000000004

// You can make them integer by multiplying by N, adding and dividing the result by N.
console.log(0.17 + 0.24); //0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); //0.41

// Another way is to add and round the result to a certain decimal place using the toFixed() method.
console.log(0.17 + 0.24); //0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); //0.41

// Math class
// Math.floor(num) returns the smallest integer
// less than or equal to the specified one
console.log(Math.floor(1.7)); //1

// Math.ceil(num) returns the largest integer
// greater than or equal to the specified number
console.log(Math.ceil(1.2)); //2

// Math.round(num) returns the value of a number
// rounded to the nearest integer
console.log(Math.round(1.2)); //1
console.log(Math.round(1.5)); //2

// Math.max(num1, num2, ...) returns the largest number from a set
console.log(Math.max(20, 10, 50, 40)); //50

// Math.min(num1, num2, ...) returns the smallest number from a set
console.log(Math.min(20, 10, 50, 40)); //10

// Math.pow(base, exponent) - exponentiation
console.log(Math.pow(2, 4)); //16

// Math.random() returns a pseudo-random number in the range (0, 1)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * (10 - 1) + 1); // pseudo-random number from 1 to 10

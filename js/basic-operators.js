// Basic Operators
// The purpose, functionality and priority(order) of operations are no different to the school algebra course.
// Operators return a value as the result of an expression.
// const x = 10;
// const y = 5;

// Addition
// console.log(x + y); //5

// Subtraction
// console.log(x - y); //5

// Multiplication
// console.log(x * y); //50

// Division
// console.log(x / y); //2

// Remainder of a division
// console.log(x % y); //0

// Addition with replacement (also available for all other operators)
let value = 5;

// Similar to value = value + 10;
value += 10;
console.log(value); // 15

// It is important to remember how the elements of expressions are called. + - * / % are operators, whereas their objects are operands.
// a > b and a < b - greater than/less than
// a >= b or a <= b - greater/less than or equal
// a == b - equal
// a != b - not equal
// a === b - strict equality
// a !== b - strict inequality
const x = 5;
const y = 10;
const z = 5;

console.log("x > y:", x > y); //false
console.log("x < y:", x < y); //true
console.log("x < z:", x < z); //false
console.log("x <= z:", x <= z); //true
console.log("x === y:", x === y); //false
console.log("x === z:", x === z); //true
console.log("x !== y:", x !== y); //true
console.log("x !== z:", x !== z); //false

// Equality operators
// ❌ Bad, typecasting
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

// ✅ Okay, no typecastings
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

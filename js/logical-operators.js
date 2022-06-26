// Logical Operators
// There are three logical operators that are used to check the execution of multiple expressions.

// Logical AND
// The && operator converts all operands to a boolean and returns the value of one of them.
// The left operand if it can be converted to false, or the right operand otherwise.
// const age = 20;
// console.log(age > 10 && age < 30); //true && true -> true

const age1 = 50;
console.log(age1 > 10 && age1 < 30); //true && false -> false
console.log(age1 > 80 && age1 < 120); //false && true -> false

console.log(1 && 5); //true && true -> 5
console.log(5 && 1); //true && true -> 1
console.log(0 && 2); //false && true -> 0
console.log(2 && 0); //true && false -> 0
console.log("" && "Mango"); //false && true -> ""
console.log("Mango" && ""); //true && false -> ""
console.log("Mango" && "Poly"); //true && true -> "Poly"
console.log("Poly" && "Mango"); //true && true -> "Mango"

// Logical OR
// The || operator converts all operands to a boolean and returns the value of one of them:
// the left operand if it can be converted to true, the right operand otherwise.
const age = 5;
console.log(age < 10 || age > 30); //true || false -> true

// The result will also be true, since at least one of the operands, in this case the right one, is converted to true.
const age2 = 40;
console.log(age2 < 10 || age2 > 30); //false || true -> true

// None of the conditions is met, so you get false, i.e. the value of the last operand.
const age3 = 20;
console.log(age3 < 10 || age > 30); //false || false -> false

console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); //true

console.log(3 || false); //3
console.log(false || 3); //3
console.log(3 || true); //3
console.log(true || 3); //true

// Logical NOT
// All the operators above are binary, containing two operands, left and right.
// The logical NOT is a unary operator, operating with just one operand on the right.
// The ! operator converts the operand to a boolean, if necessary, and then inverses, i.e. replaces it with the opposite true -> false or false -> true.
console.log(!true); //false
console.log(!false); //true
console.log(!3); //!3 -> !true -> false
console.log(!"Mango"); //!"Mango" -> !true -> false
console.log(!0); //!0 -> !false -> true
console.log(!""); //!"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; //!isOnline  -> !true -> false

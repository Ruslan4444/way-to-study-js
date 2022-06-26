// Ternary Operator
// The ternary operator is used as a more syntactically concise replacement for the if ... else statement,
//     when the same variable needs to be assigned different values according to a condition.

/* <condition> ? <expression_if_condition_true> : <expression_if_condition_false></expression_if_condition_false> */
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); //adult

// Let's refactor by replacing if ... else with a ternary operator.
const age1 = 20;
const type1 = age1 >= 18 ? "adult" : "child";
console.log(type); //adult

const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); //10

const num3 = 5;
const num4 = 10;
const biggerNumber1 = num3 > num4 ? num3 : num4;

console.log(biggerNumber1); //10

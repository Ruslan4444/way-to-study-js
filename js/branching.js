// Branches are used to execute particular code depending on the condition.

// if statement
// The input data that is converted to a boolean is called a condition.
// if (condition) {
//   // if body
// }
// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }
// console.log(cost); //100

// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }
// console.log(cost); //0

// if...else statement

// if (condition) {
//   // if body
// } else {
//   // else body
// }
// let cost;
// const subscription = "free";
// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost);
// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); //100

// else...if statement
// The else ... if block enables you to add after else another if statement with a condition.
//  At the end of the chain, there can be a classic else block, which will be executed only if none of the conditions is converted to true.
let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}
console.log(cost); //500

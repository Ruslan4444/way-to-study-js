// Switch Statement

// Its syntax consists of the switch (value) block, i.e.what to compare, and many individual case value cases, i.e.what to compare with.
// For comparison, the strict equality operator === is used.That is, you cannot compare in terms of more or less, only in terms of equality.
// switch (value) {
//   case value:
//     statements;
//     break;

//   case value:
//     statements;
//     break;

//   default:
//     statements;
// }

let cost;
const subscription = "premium";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); //500

// Scope;
// Variable scope is the availability of variables in a certain part of code.
const value = 5;

if (true) {
  console.log("Block scope: ", value); //Block scope:  5
}

console.log("Global scope: ", value); //Global scope:  5

if (true) {
  const value1 = 5;
  console.log("Block scope: ", value1); //Block scope:  5
}

// console.log("Global scope: ", value1); //ReferenceError: value1 is not defined

const global = "global";

if (true) {
  const blockA = "block A";

  // You see global + local A
  console.log(global); // "global"
  console.log(blockA); // block A

  // Variables blockB and blockC cannot be found in the available scopes.
  // You will see a variable accessing error.
  //   console.log(blockB); // ReferenceError: blockB is not defined
  //   console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // You see global + external A + local B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Variable blockC cannot be found in the available scopes.
    // You will see a variable accessing error.
    // console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // You see global + local C
  console.log(global); // global
  console.log(blockC); // block C

  // Variables blockA and blockB cannot be found in the available scopes.
  // You will see a variable accessing error.
  //   console.log(blockA); // ReferenceError: blockA is not defined
  //   console.log(blockB); // ReferenceError: blockB is not defined
}

// You see only the global one
console.log(global);

// Variables blockA, blockB and blockC cannot be found in the available scopes.
// You will see a variable accessing error.
// console.log(blockA);
// console.log(blockB);
// console.log(blockC);

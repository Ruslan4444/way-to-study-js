// while loop
// The while construct creates a loop that executes a block of code as long as the test condition evaluates to true.
let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

// Fill rooms in the hotel until the current number of clients is equal to the maximum allowed.
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// do...while loop
// Post - test loop is a loop in which the condition is tested after executing the loop body.
//     Hence, the body is executed at least once.
// do {
//   // statement
// } while (condition);
// let password = "";

// do {
//   password = prompt("Enter a password longer than 4 characters", "");
// } while (password.length < 5);

// console.log("Entered password: ", password);

// for loop
// for (initialization; condition; post - expression) {
//   // statements
// }
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

// Calculate the sum of numbers up to a certain value.
const target = 5;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += 1;
}

console.log(sum);

// Call to mind the a % b operation and find the remainder of division using a loop.
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// break operator
// You can interrupt the execution of a loop at any time.
// For this purpose, there is a break operator, which completely terminates the execution of the loop and transfers control to the string after its body.
// Find the number 3. As soon as the if condition is met, the loop will stop executing (it will be interrupted).
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Number 3 found, abort the loop");
    break;
  }
}

console.log("Log after loop");

// continue operator
// It does not interrupt the entire loop, but only the current iteration.
// It is used when there is nothing else to do in the current iteration, or nothing needs to be done at all, and it is time to move on to the next iteration.
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Odd i: ", i); //1, 3, 5, 7, 9
}

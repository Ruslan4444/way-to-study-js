// The for loop can be used to iterate over an array element by element.

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }

// To access array elements, use syntax with square brackets, array[index], where index is the value of the loop counter from 0 to the last index of the array, that is, less than but not equal to its length.

// The for...of construct declares a loop that iterates over iterable objects such as arrays and strings. The loop body will execute for each element's value. This is a good replacement for the for loop when you do not need to access the iteration counter.

// for (const variable of iterable) {
//   // loop body
// }
// --- variable is a variable that stores element values at each iteration.
// --- iterable is a collection that contains enumerable elements such as an array.

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// break and continue statements
// Let's look for the client's name in the array of names. After indentifying it, the loop is interrupted, as there is no point in looking further (all names are unique).

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // At each iteration, check if the array element matches
  // client's name. If it matches, then log a message
  // and make a break so as not to look further

  if (client === clientNameToFind) {
    message = "Client name exists in the database!";
    break;
  }

  // If no match is found, create a message saying that there is no such a name
  message = "Client name does not exist in the database!";
}

console.log(message);

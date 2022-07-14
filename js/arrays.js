// Creation
// An array is declared with the opening and closing square brackets [], array literals. Inside the brackets, each array element is separated by a comma.

// const clients = ["Mango", "Poly", "Ajax"];

// By specifying the element index in brackets, you get its value
// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

// Unlike strings, array elements can be changed if you access them by index and assign a different value.

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";

// console.log(clients);

// Array length
// The length of an array, that is, the number of its elements, is stored in the length property. It is a dynamic value that changes automatically when elements are added or removed.

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length); //3

// Using the formula array_length - 1, you can get the value of the last element of any array with arbitrary length.

const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;

console.log(clients.length);
console.log(lastElementIndex);
console.log(clients[lastElementIndex]);

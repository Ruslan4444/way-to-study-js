// There are two data output methods: console.log() and alert().
// In parentheses, enter the name of the variable you want to output the value.
// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// You can first use a descriptive string, then put a comma and enter the variable name.
const username = "Mango";
console.log("Username is ", username); // Username is Mango

// The alert() method displays a modal window, with a text corresponding to the value of the variable (or literal) in parentheses.
const message = "JavaScript is awesome";
alert(message);

// To get data from the user, you can use prompt() and confirm().These are also methods from the window interface.
// As a result of their execution, they return what was entered by the user; therefore, their result can be written to a variable for further use.

// Ask the client to confirm hotel reservation
// and save the confirm result to a variable
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

// prompt() displays a modal window with an input field and two buttons, Ok and Cancel.
//  When clicking Ok, the result will be what the user enters, while Cancel returns null.
// Ask for the name of the hotel where the client would like to stay
// and save the prompt result to a variable.
const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

// An important feature of prompt is that, no matter what the user enters, it always returns a string.
// That is, if the user enters 5, it will return not the number 5, but the string "5".
const value = prompt("Please enter a number!");
console.log(typeof value);
console.log(value);

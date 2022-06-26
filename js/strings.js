// String is an indexed set of zero or more characters, enclosed in single or double quotes.
const userName = "Mango";
// It is important to remember that the indexing of string elements starts at zero.

// String concatenation
// If you apply the + operator to a string and any other data type, the result of this addition is a string.
// This operation is called concatenation, or string addition.
// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

console.log(1 + "2"); //12
console.log(1 + "2" + 4); //124
console.log(1 + 2 + "4"); //34

// Template strings
// Template strings are an alternative to concatenation with more convenient syntax.
// Using variables, you need to make a string with substituted values
const guestName = "Mango";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); //"Welcome Mango, your room number is 207!"

// It is very cumbersome to make strings with substituted values using concatenation.
// Template strings and interpolation come to the rescue.
const guestNameHotel = "Mango";
const roomNumberHotel = 207;
const guestGreeting = `Welcome ${guestNameHotel}, your room number is ${guestNameHotel}!`;
console.log(guestGreeting); //Welcome Mango, your room number is Mango!

// String properties and methods
// length property
// const message = "Welcome to Bahamas!";
// console.log(message.length); //19
// console.log("There is nothing impossible to him who will try".length); //47

// toLowerCase() and toUpperCase() methods
// They return a new string in the appropriate case without modifying the original string.
// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); //welcome to bahamas!
// console.log(message.toUpperCase()); //WELCOME TO BAHAMAS!
// console.log(message); //Welcome to Bahamas!

console.log("saMsUng" === "samsung"); //false
console.log("saMsUng" === "SAMSUNG"); //false

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); //saMsUng
console.log(userInput === BRAND_NAME); //false
console.log(normalizedToUpperCaseInput); //SAMSUNG
console.log(normalizedToUpperCaseInput === BRAND_NAME); //true

// indexOf() method
// It returns the position (index) of the first substring match, or -1 if nothing is found.
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); //8
console.log(message.indexOf("hello")); //-1

// includes() method
// It checks if a substring is included in the string, returns boolean true if included and false otherwise.
// The case of characters in a string and substring is important, since, for example, the letter "a" is not equal to the letter "А".
const productName = "Maintenance droid";

console.log(productName.includes("n")); //true
console.log(productName.includes("N")); //false
console.log(productName.includes("droid")); //true
console.log(productName.includes("Droid")); //false
console.log(productName.includes("Maintenance")); //true
console.log(productName.includes("maintenance")); //false

// endsWith() method
// It helps determine if a string ends with the characters (substring) specified in parentheses, returning true or false.
// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); //true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); //false

// replace() and replaceAll() methods
// They return a new string in which the first (replace) or all (replaceAll) substring matches have been replaced with the specified value.
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); //script.min.js

const cssFileName = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileName.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); //styles.min.css, about.min.css, portfolio.min.css

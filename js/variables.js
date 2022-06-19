// Variables and Types

// Such a variable must be immediately initialized with a value, after which it cannot be overridden.

const yearOfBirth = 2006;
console.log(yearOfBirth); //2006

// In order to declare a variable which can be later assigned a new value, use the keyword let.

// let age;
// console.log(age); //undefined

// When a variable is declared as let, you can overwrite its value.

// age = 14;
// console.log(age); // 14

// The names of CONSTANTS, i.e. variables with unchanged values throughout the entire script, are usually written in the UPPER_SNAKE_CASE format.

// Constant storing the color value
const COLOR_TEAL = "#009688";

// Constant storing a log in message
const LOGIN_SUCCESS_MESSAGE = "Welcome!";

// let username;
// console.log(username); //undefined

// ❌ Wrong, error message
// age = 15; // ReferenceError: Cannot access 'age' before initialization

// Declaring the variable age
// let age = 20;

// ✅ Correct, accessing after declaration
// age = 25;
// console.log(age); //25

// Primitive types
// Number, integers and floating-point numbers.
const age = 20;
const points = 15.8;

// String, strings, a sequence of zero or more characters. Every string begins and ends with single ' or double quotes ".
// const username = "Mango";
// const description = "JavaScript for beginners";

// Boolean is a logical data type, true / false flags.
// Only two values are used, true and false.
// For example, when asked whether the light in the room is on, you can answer yes(true) or no(false).
const isLoggedIn = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;

// null is a special value that essentially means nothing.It is used in situations where emptiness must be explicitly indicated.
// For example, if the user has not selected anything yet, you can say that the value is null.
let selectedProduct = null;

// undefined is another special value.
//  By default, when a variable is declared but not initialized, its value is undefined, it is assigned undefined.
// let username;
// console.log(username); // undefined

// typeof operator; It is used to get the variable's value type.
// It returns in place of its call the value type of the variable specified after it, so you will see a string with type name.
let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

let quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSideBarOpen = false;
console.log(typeof isSideBarOpen); // "boolean"

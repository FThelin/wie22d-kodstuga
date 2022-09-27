//DATA TYPES

//Primitive Types
const string = "This is a string"; //string
const number = 10; //number
const bool = true; //boolean
const und = undefined; //undefined
const nil = null; //null

//Object types
const list = [1, "2", 3, 4, 5, 6]; //Array (lista)'
//Object
const person = {
  firstName: "Fredrik",
  lastName: "Thelin",
};

//VARIABLES
// var myVariable;
let myVariable2;
const myVariable3 = "Thelin";
myVariable2 = "Björn";

//CONSOLE
//console.log(myVariable2);

//ALERT/PROMT
// alert("This is an alert");
// const number1 = prompt("Säg ett nummer");
// const number2 = prompt("Säg ett till nummer");
//console.log(parseInt(number1) + parseInt(number2));
//MATH OPERATORS
//const x = 16 + 3;
// console.log(x);

//LOGICAL OPERATORS
const x = 1;
const y = 2;
const z = 3;
const m = 4;

//const age = prompt("Hur gammal är du?");

// if (age <= 18) {
//   console.log("Du är inte ens myndig");
// } else if (age > 18 && age < 39) {
//   console.log("Du är alldeles lagom");
// } else {
//   console.log("Du är lastgammal");
// }

//STRING CONCAT
const firstName = "Fredrik";
const lastName = "Thelin";
const age = 40;

// console.log(
//   "Du heter " + firstName + " " + lastName + ", och du är " + age + " år"
// );

console.log(`Du heter ${firstName} ${lastName} och du är ${age} år`);

/*
"use strict"; //activated strict mode for entire script.
// it will create visible errors for us in certains situations.

// example
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true; //ommit the s
if (hasDriversLicence) console.log("I can drive :D");

// without the error it will work

// const interface = "Audio";
// const private = 534; strict mode reserves a few words for the feature.


// functions
function logger() {
  console.log("My name is Adrian");
}
// now we can use it as many times as we want.
// calling / running / invoking the function
logger();
logger();
logger();

// receive or return data
function fruitProcessor(apples, oranges) {
  //parameters
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); //arguments
console.log(appleJuice);
const appleJuice2 = fruitProcessor(2, 10); //arguments
console.log(appleJuice2);
//We can run this function as many times as we want.
//convert a number in a string
const num = Number("23");


// Function declaration

// Calculate age by given birth year
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age1, age2);
// Expressions produce values 
// It is  my choice which type I use.
*/

// Arrow functions
// Is a function expresion but is shorter and faster to write

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Calculate how many years a person has left until retirement
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

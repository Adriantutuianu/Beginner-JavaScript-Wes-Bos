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


//Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //parameters
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 8));


// Review functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🥳`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
// Similar Array
const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

// Console the first from friends - Michael- the count starts from 0
console.log(friends[0]);
// Console the 3rd from friends - Peter
console.log(friends[2]);

//Console the number of elements in the array
console.log(friends.length);
// Console the last Element- friends.length which is 3 - 1 which takes me at position 2  which is Peter- the last one.
console.log(friends[friends.length - 1]);
// Add Elements to the array
friends[2] = "Jay"; // change Peter with Jay
console.log(friends);
// An array with different types of values at the same time
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
// calculate age for 1, 2, 5 element
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

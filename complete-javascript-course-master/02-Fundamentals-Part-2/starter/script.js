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


Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/

// 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
// 2 //Test1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
// 3
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

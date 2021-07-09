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



// Basic array operations

const friends = ["Michael", "Steven", "Peter"];

// the push method
const newLength = friends.push("Jay");
console.log(friends); // Original array + Jay
console.log(newLength);

// Method to add Element to the begginning of the array
// The unshift method
friends.unshift("John");
console.log(friends);
// Method to remove an element to array
friends.pop(); //last element of the array.
friends.pop(); //last element of the array.
console.log(friends); //Jay and Peter are gone

// Remove the first element of the array
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); //it`s not on the list

// Includes method
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Bob")); //false

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
*/

// 1
/*
const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

//2
const bills = [125, 555, 44];
console.log(bills);

// 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// 4
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

// Introduction to Objects
/*
//object with 5 properties
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
*/
/*
// Dot vs bracket notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName); //last name
console.log(jonas["lastName"]); //similar

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// prompt-string - pop up window with input field
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and freinds"
);
console.log(interestedIn);
// Display the job in console because this is the user choose.
console.log(jonas[interestedIn]); //use bracket notation for correct result

// tried to console location => undefined - is not on the list
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and freinds"
  );
}

// To add new property to objects

jonas.location = "Portugal"; //dot
jonas["twitter"] = "@jonasschmedtmann"; //brackets
console.log(jonas);

//Challenge
//"Jonas has 3 friends and his best friend is called Michael"
console.log(`
  ${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`);
*/
//Object methods
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicence: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(jonas.calcAge(1991));
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.


//1 + 2
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
/*
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

//3
("John's BMI (28.3) is higher than Mark's (23.9)!");
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

const result = document.querySelector("#result");

result.innerHTML = mark.calcBMI();

const mass = document.querySelector("#mass");

mass.innerHTML = mark.mass;


//46. The for loop
// Allow us to automate repetitive tasks ;
// console.log("Lifting weights repetition 1🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 2🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 3🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 4🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 5🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 6🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 7🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 8🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 9🏋️‍♀️🏋️‍♂️");
// console.log("Lifting weights repetition 10🏋️‍♀️🏋️‍♂️");
// Instead of doing this we can create a loop:

//for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/
// 47. Looping arrays , breaking and continuing

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = 0; i < 5; i++) {
  console.log(jonas[i]);
}

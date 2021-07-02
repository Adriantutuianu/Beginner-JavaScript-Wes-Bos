/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// This aproach is more accurate
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Primitive data types
// numbers , string , boolean - the most important ones

// Number: Floating point numbers - used for decimals and integers : let age = 23;

// string: sequence of characters - used for text let firstName = 'Jonas'; - always in quotes

// Boolean: logical type that can only be true or false - used for taking decisions let fullAge = true;

// Undefined : value taken by a variable that is not yet defined ('empty value')   let children;

// Null : also means 'empty value'

// Symbol - value that is unique and cannot be changed- not useful for us

// BigInt : larger integers than the number type can hold


 -multi line comment 


let javaScriptisFun = true;
console.log(javaScriptisFun);

console.log(typeof true);
console.log(typeof javaScriptisFun);
console.log(typeof 23);
console.log(typeof "Jonas");

// Only first time when you tipe a var it is necessary to type it.
javaScriptisFun = "YES!";
console.log(typeof javaScriptisFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


// I can use let when the value need to be changed at some point in the future
let age = 30;
age = 31;

// the value of a variable const cannot be changed
const birthYear = 1991;

// var is the old way to define variable prior to es06
var job = "programmer";
job = "teacher";
// var is very similar with let
console.log(job);

// Is working without let const or var
lastName = "Schmedtmann";
console.log(lastName);


// Basic operators

// Minus
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x* 4 = 100
x++; //x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // > < >= <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y; // it will calculate from right to left.
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);

// average of values
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 

// // 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// When I change the numbers - is changing all the results

1;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
2;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

//3
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// Strings and template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// //  I'm Jonas, a 46 years old teacher!
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);
// // similar and quicker we can write :
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jonasNew);

// Ex mentor:

const firstName = "Stefan";
const job = "web developer";
const relation = "my brother";
const birthYear = 1989;
const year = 2021;

// Stefan is 32 years old, web developer, my brother and my mentor.
const stefan = `${firstName} is ${
  year - birthYear
} years old,  ${job}, ${relation} and my mentor.`;
console.log(stefan);

// any regular string we can write like that:
console.log(`Just a regular string...`);

// Multi line strings
// before es6 :
console.log("String with \n\
multiple \n\
lines");
// after es6- this is cleaner- this is the one that we use
console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
// Century when a person was born
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉


// 1
const massMark = 79;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
// 2
const BMIValue = `Mark's BMI (${BMIMark}) is higher than John's ( ${BMIJohn})!`;
console.log(BMIValue);


// Type conversion

const inputYear = "1991"; //incorect - string should be number (without"")
console.log(Number(inputYear)); //convert string to number
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //NaN - not a number- invalid number.
console.log(typeof NaN);

// convert number to string

console.log(String(23));

// type coercion- happens whenever an opeartor is dealing with 2 values with 2 different types
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); //javascript converts string to numbers automatic
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1; //11- result
n = n - 1;
console.log(n); // console result 10


// 5 falsy values: 0, '' , undefined, null , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({})); //empty object{}
console.log(Boolean(""));

const money = 0; // 0 is a falsy value - console - else
if (money) {
  console.log("don't spend it all");
} else {
  console.log("You should get a job!");
}

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); //console - else

let height = 123;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


// Equality operators :

const age = 18;
if (age === 18) console.log("You just become an adult!");
// === - to check - strict equality operator

console.log(18 === 18); // true
console.log(18 === 19); // false

// == - loose equality operator
console.log("18" == 18); //true
console.log("18" === 18); // false

if (age == 18) console.log("You just become an adult!(loose)");

const favourite = prompt("What is your favourite number?");
console.log(favourite);

if (favourite === 23) {
  // "23" == 23
  console.log("cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
//we can add as many as we want else if.

// different operator
if (favourite !== 23) console.log("why not 23?");

//logical operator
//Boolean logic: and , or & not operators

// and operator
// a and b - the result is true only when both are true.

// or operator
// a or b  - the result is true when one or both are true

// not operator
// not a, not b - inverts true/false value


const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision); //and operator
console.log(hasDriversLicence || hasGoodVision); //or operator
console.log(!hasDriversLicence); //not operator

const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; //c
console.log(hasDriversLicence || hasGoodVision || isTired); //or operator

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
//1
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (96 + 108 + 89) / 3;
console.log(scoreDolphins, scoreKoalas);

// 2
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins wins!");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas wins!");
} else if (scoreDolphins === scoreKoalas) {
  console.log("draw!");
}

/*
// The switch statement

const day = "friday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("plan course structure");
    console.log("go to coding meetup");
    break; // without the break code continue to execute.
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend!");
    break;
  default:
    console.log("not a valid day!");
}

//if - else alternative
if (day === "monday") {
  console.log("plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend!");
} else {
  console.log("not a valid day!");
}

//Statement and expresions
// statements are full sentences that translate or actions.
3 + 4; // this is an expresion because it does produce value
1991; // expresion as well
true && false && !false; //expresion- boolean value

if (23 > 10) {
  const str = "23 is bigger"; //no value produced -'23 is bigger'  is an expresion.
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`); // this is an expresion


// the conditional operator

const age = 23;
age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water🌊");
// we are going to do it like that- all condition in a single line- ternary operator
const drink = age >= 18 ? "wine🍷" : "water🌊";
console.log(drink);
//condition inside of a template literall
console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water🌊"}`);


Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip);

console.log(
  `The bill was ${bill} , the tip was ${tip}, the total value was ${
    bill + tip
  }.`
);
*/

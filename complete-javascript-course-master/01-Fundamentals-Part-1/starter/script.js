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
*/
// 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// 2
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

//3
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

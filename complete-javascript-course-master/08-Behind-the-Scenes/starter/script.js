'use strict';
//Scoping: how our prgram`s variables are organized and accessed. Where do variables live? or Where can we access a certain variable, and where not?
//Lexical scoping: Scoping is controlled by placement of functions and blocks in code
//Scope of a variable: Region of our code where a certain variable can be accessed.
// 3 types of scope: global scope, function scope, block scope(ES6)

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

// function add (a, b);
// return a + b;

//     }
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// 94. Variable environment .Hoisting and The TDZ
// Hoisting- makes some types of variable accesible/usable in the code before they are actually declared.
/*
//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return (a = b); //not working
};

var addArrow = (a, b) => a + b; // not working

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;
*/

// 96. The this keyword
// Special variable that is created for every execution AudioContext(every function)

console.log(this); //only in strict mode

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};
jonas.calcAge();

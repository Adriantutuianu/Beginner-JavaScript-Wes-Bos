'use strict';
// Object oriented programming OOP

// OOP i a programming paradigm based on the concept of objects.

// Constructor function and the new Operator

const Person = function (firstName, birthYear) {
  //  Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2000);

console.log(matilda);
console.log(jack);

console.log(jonas instanceof Person);

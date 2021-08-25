'use strict';
// Object oriented programming OOP

// OOP i a programming paradigm based on the concept of objects.

// Constructor function and the new Operator

const Person = function (firstName, birthYear) {
  console.log(this);
};

new Person('Jonas', 1991);

// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically return {}

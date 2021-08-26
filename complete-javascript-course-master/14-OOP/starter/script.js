'use strict';
// Object oriented programming OOP

// OOP i a programming paradigm based on the concept of objects.

// Constructor function and the new Operator

// const Person = function (firstName, birthYear) {
//   //  Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// // 1. New empty object {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to a prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 2000);

// console.log(matilda);
// console.log(jack);

// console.log(jonas instanceof Person);

// Static Methods

// Person.hey = function () {
//   console.log('Hey there!!✔');
// };

// Person.hey();

// //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// // ES6 Classes
// //class expresion
// const PersonCL = class {};

//class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCL('Jessica', 1996);
console.log(jessica);

jessica.calcAge();
console.log(jessica.__proto__ === PersonCL.prototype); //true

PersonCL.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// Classes are not hoisted
// Classes are first class citizes
// Classes are executed in strict mode

// Setters and getters

const account = {
  owner: 'jonas',
  movements: [200, 530, 130, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = '2002';
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

//Inheritance Between Classes :Constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'computer science.');
console.log(mike);
mike.introduce();

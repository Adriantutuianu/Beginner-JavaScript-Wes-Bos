'use strict';
//Functions
/*
//Default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123, ', 2);
createBooking('LH123, ', 5);
*/
/*
// 128.How Passing Arguments Works:
// value vs reference
const flight = 'LH234';
const jonas = {
  name: 'Adrian Tutuianu',
  passport: 3262372527,
};

//check in function- flight number changed
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 3262372527) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

*/
// 129. First class and higher order functions
//First class functions
// -JS treats functions as first class citizens
// - functions are simply values
// -functions are just another type of object

//Higher order function
//A function that receives another function as an argument , that returns
// a new function , or both.
// This is only posible because of first class functions.

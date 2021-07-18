'use strict';
// First DOM manipulation
/*
console.log(document.querySelector('.message').textContent);
// DOM- document object model - structured representation of HTML Documents .Allows Javascript to access HTML elements and styles to manipulate them

// 72.Selecting and manipulating elements

// Change the content
document.querySelector('.message').textContent = 'Correct number🥳';
console.log(document.querySelector('.message').textContent);

//72.Seleting and manipulating elements
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

// 73. Handling click events

// const x = function () {
//   console.log(23);
// };

// similar
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

// 74. Implementing the Game Logic

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';
  }
});

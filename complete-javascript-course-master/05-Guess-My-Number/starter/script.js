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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number🥳';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 💹';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game!🚀🚁⛵';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game!🚀🚁⛵';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

// 1
document.querySelector('.again').addEventListener('click', function () {
  //2
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // 3
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // 4
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

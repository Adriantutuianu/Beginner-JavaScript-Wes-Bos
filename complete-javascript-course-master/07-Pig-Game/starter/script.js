'use strict';
// 82 Project Pig Game

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnNew = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--hold');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// 83. Rolling the dice

btnRoll.addEventListener('click', function () {
  // 1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2.Display dice
  // 3. Check the roller 1 : if true, switch to next player
});

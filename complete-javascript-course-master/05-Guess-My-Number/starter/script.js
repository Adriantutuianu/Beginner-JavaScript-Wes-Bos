'use strict';
// First DOM manipulation
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

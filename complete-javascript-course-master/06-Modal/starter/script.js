'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].addEventListener('click', openModal));

//   80 Working with classes

btnCloseModal.addEventListener('click', closeModal);
// Click outside the modal to close it
overlay.addEventListener('click', closeModal);

// 81 Handling an ESC keypress event

document.addEventListener('keydown', function () {
  console.log('A key was pressed');
});

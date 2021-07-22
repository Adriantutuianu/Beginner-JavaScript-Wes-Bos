'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(
    btnsOpenModal[i].addEventListener('click', function () {
      console.log('Button clicked');
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );

//   80 Working with classes
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
// Click outside the modal to close it
overlay.addEventListener('click', closeModal);

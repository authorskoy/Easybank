const btnHamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header__menu');

const toggleClass = function (e, classToE) {
  e.classList.toggle(classToE);
}

btnHamburger.addEventListener('click', function () {
  toggleClass(header, 'open');
  toggleClass(overlay, 'fade-in');
  toggleClass(overlay, 'fade-out');
  toggleClass(headerMenu, 'fade-in');
  toggleClass(headerMenu, 'fade-out');
});
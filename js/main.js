'use strict';

const burger = document.querySelector('.nav__burger');
const navItems = document.querySelector('.nav__items');
const closeBtn = document.querySelector('.nav__close');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.nav__link');

function openMenu() {
  navItems.classList.add('active');
  closeBtn.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navItems.classList.remove('active');
  closeBtn.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 640) {
    closeMenu();
  }
});

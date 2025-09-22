'use strict';

const burger = document.querySelector('.nav__burger');
const navItems = document.querySelector('.nav__items');
const closeBtn = document.querySelector('.nav__close');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  navItems.classList.toggle('active');
  closeBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
  navItems.classList.remove('active');
  closeBtn.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  navItems.classList.toggle('active');
  closeBtn.classList.add('hidden');
  overlay.classList.add('hidden');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navItems.classList.toggle('active');
    closeBtn.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});

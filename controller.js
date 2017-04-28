const cardHeader = document.querySelectorAll('.card-header')
const cardContents = document.querySelectorAll('.c-content');
const cardHeaderIcons = document.querySelectorAll('.card-header-icon');
const cardIcons = Array.from(cardHeaderIcons).map(elem => elem.querySelector('i'));

window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');

  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}

cardHeader.forEach((elem, index) => elem.addEventListener('click', e => {
  const cardContent = cardContents[index];
  const cardIcon = cardIcons[index];
  cardContent.classList.toggle('slide-down');
  cardContent.classList.toggle('slide-up');
  cardIcon.classList.toggle('fa-angle-down');
  cardIcon.classList.toggle('fa-angle-up');
}));

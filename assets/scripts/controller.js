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

  fixNav();
  checkSection();
  checkFontSize();
}

window.onresize = checkFontSize;

cardHeader.forEach((elem, index) => elem.addEventListener('click', e => {
  const cardContent = cardContents[index];
  const cardIcon = cardIcons[index];
  cardContent.classList.toggle('slide-down');
  cardContent.classList.toggle('slide-up');
  cardIcon.classList.toggle('fa-angle-down');
  cardIcon.classList.toggle('fa-angle-up');
}));

const nav = document.querySelector('#nav');
const navTop = nav.offsetTop;
const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('.nav-menu');
const navItems = navMenu.querySelectorAll('.nav-item');

function fixNav () {
  const section1 = document.querySelector('.section-1');
  if(window.scrollY > 0) {
    section1.style.paddingTop = `${nav.offsetHeight}px`;
    nav.classList.add('fixed-nav');
  } else {
    section1.style.paddingTop = 0;
    nav.classList.remove('fixed-nav');
  }
}

function checkFontSize() {
  const maxFontSize = 130;
  const title = document.querySelector('#about-title');
  var fontSize = parseFloat(window.getComputedStyle(title, null).getPropertyValue('font-size'));
  if (fontSize > maxFontSize) title.style.fontSize = `${maxFontSize}px`;
  else title.style.fontSize = `14vw`;
}

function checkSection(){
  var index = 0;
  for (var i = sections.length - 1; i > 0; i--) {
    if (window.scrollY >= sections[i].offsetTop) {
      index = i;
      break;
    }
  }
  const activeItem = navMenu.querySelector('.is-active');
  if(activeItem) activeItem.classList.remove('is-active');
  navItems[index].classList.add('is-active');
}

window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', checkSection);
nav.addEventListener('click', checkSection);

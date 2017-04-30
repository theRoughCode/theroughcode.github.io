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
  if(window.scrollY > 0) {
    sections[0].style.paddingTop = `${nav.offsetHeight}px`;
    for (var i = 0; i < sections.length - 1; i++) {
      sections[i].style.marginBottom = `${nav.offsetHeight / (sections.length - 1)}px`;
    }
    nav.classList.add('fixed-nav');
  } else {
    sections[0].style.paddingTop = 0;
    sections[0].style.marginBottom = 0;
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
    console.log(window.scrollY , sections[i].offsetTop - nav.offsetHeight);
    if (window.scrollY >= sections[i].offsetTop - nav.offsetHeight - 5) {
      lastPos = window.scrollY;
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

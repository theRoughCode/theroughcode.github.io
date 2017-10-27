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

window.onresize = checkFontSize

const nav = document.querySelector('#nav');
const navbar = nav.querySelector('.nav');
const navTop = nav.offsetTop;
const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('.nav-menu');
const navItems = navMenu.querySelectorAll('.nav-item');

// fix navbar
function fixNav () {
  const height = nav.offsetHeight;
  if(window.scrollY > 0) {
    sections[0].style.marginTop = `${height}px`;
    for (var i = 1; i < sections.length - 1; i++) {
      sections[i].style.marginBottom = `${height / (sections.length - 2)}px`;
    }
    nav.classList.add('fixed-nav');
    navbar.classList.add('shrink');
  } else {
    sections[0].style.marginTop = 0;
    sections[0].style.marginBottom = 0;
    nav.classList.remove('fixed-nav');
    navbar.classList.remove('shrink');
  }
}

// set max font size for title
function checkFontSize() {
  const maxFontSize = 130;
  const defFontSize = 14;
  const title = document.querySelector('#about-title');
  var titles = document.querySelectorAll('.section-title')
  title.style.fontSize = `${defFontSize}vw`;
  var fontSize = parseFloat(window.getComputedStyle(title, null).getPropertyValue('font-size'));
  if (fontSize >= maxFontSize) title.style.fontSize = `${maxFontSize}px`;
}

function checkSection(){
  var index = 0;
  for (var i = sections.length - 1; i > 0; i--) {
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

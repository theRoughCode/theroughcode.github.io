const cardHeader = document.querySelectorAll('.card-header')
const cardContents = document.querySelectorAll('.c-content');
const cardHeaderIcons = document.querySelectorAll('.card-header-icon');
const cardIcons = Array.from(cardHeaderIcons).map(elem => elem.querySelector('i'));

cardHeader.forEach((elem, index) => elem.addEventListener('click', e => {
  const cardContent = cardContents[index];
  const cardIcon = cardIcons[index];
  cardContent.classList.toggle('slide-down');
  cardContent.classList.toggle('slide-up');
  cardIcon.classList.toggle('fa-angle-down');
  cardIcon.classList.toggle('fa-angle-up');
}));

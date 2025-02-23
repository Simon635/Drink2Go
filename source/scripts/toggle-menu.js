const openButton = document.querySelector('.js-toggle-button');
const closeButton = document.querySelector('.button-close');

const burgerMenu = document.querySelector('.header__navigation-list-container');

const showButton = () => {
  openButton.classList.toggle('header__nav-button--show');
  closeButton.classList.toggle('header__nav-button--show');
};

const openMenu = () => {
  burgerMenu.classList.add('header__navigation-list-container--open');
  showButton();
};

const closeMenu = () => {
  burgerMenu.classList.remove('header__navigation-list-container--open');
  showButton();
};

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

export { openMenu };

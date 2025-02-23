const arrowLeft = document.querySelector('.slider-button-prev');
const arrowRight = document.querySelector('.slider-button-next');

const slides = document.querySelectorAll('.slider__card');

const bottom = document.querySelector('.slider-pagination');

const slider = document.querySelector('.slider');

let currentSlideIndex = 0;
const paginationItems = [];
const colorGroup = ['#f3ebe1', '#eae6fc', '#e5e6e8'];


function createPaginationItems() {
  const div = document.createElement('div');
  div.className = 'slider__pagination-button';
  bottom.appendChild(div);
  paginationItems.push(div);
}

function addPagination() {
  slides.forEach(createPaginationItems);
  paginationItems[0].classList.add('slider__pagination-button--check');
  paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => changedSlide(index));
  });
}

function addActiveClass() {
  paginationItems[currentSlideIndex].classList.add('slider__pagination-button--check');
}

function removeActiveClass() {
  paginationItems[currentSlideIndex].classList.remove('slider__pagination-button--check');
}

function showSlide() {
  slides[currentSlideIndex].classList.add('slider__card--show');
  slider.style.backgroundColor = colorGroup[currentSlideIndex];
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove('slider__card--show');
}

function changedSlide(slideIndex) {
  hideSlide();
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
}

function nextSlide() {
  let newSlideIndex = currentSlideIndex + 1;
  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changedSlide(newSlideIndex);
}

function previousSlide() {
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changedSlide(newSlideIndex);
}

addPagination();
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', previousSlide);

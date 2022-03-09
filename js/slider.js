let slides = document.querySelectorAll('.ice-cream-slide');
let dots = document.querySelectorAll('.slider-pagination-button')
let prevButton = document.querySelector('.photo-prev');
let nextButton = document.querySelector('.photo-next');
let mainBody = document.querySelector('body');
let i = 0;

prevButton.onclick = function () {
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  if (i === 2) {
    mainBody.classList.add('body-condition-2');
    mainBody.classList.remove('body-condition-1');
    slides[0].classList.add('visually-hidden');
    slides[1].classList.add('visually-hidden');
    slides[2].classList.remove('visually-hidden');
    dots[0].classList.remove('slider-pagination-button-current');
    dots[1].classList.remove('slider-pagination-button-current');
    dots[2].classList.add('slider-pagination-button-current');
  }
  if (i === 1) {
    mainBody.classList.add('body-condition-1');
    mainBody.classList.remove('body-condition-2');
    slides[0].classList.add('visually-hidden');
    slides[1].classList.remove('visually-hidden');
    slides[2].classList.add('visually-hidden');
    dots[0].classList.remove('slider-pagination-button-current');
    dots[1].classList.add('slider-pagination-button-current');
    dots[2].classList.remove('slider-pagination-button-current');
  } else if (i === 0) {
    mainBody.classList.add('body-condition-0')
    mainBody.classList.remove('body-condition-1');
    slides[0].classList.remove('visually-hidden');
    slides[1].classList.add('visually-hidden');
    slides[2].classList.add('visually-hidden');
    dots[0].classList.add('slider-pagination-button-current');
    dots[1].classList.remove('slider-pagination-button-current');
    dots[2].classList.remove('slider-pagination-button-current');
  }
}

nextButton.onclick = function () {
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  if (i === 1) {
    mainBody.classList.add('body-condition-1');
    mainBody.classList.remove('body-condition-2');
    slides[0].classList.add('visually-hidden');
    slides[1].classList.remove('visually-hidden');
    slides[2].classList.add('visually-hidden');
    dots[0].classList.remove('slider-pagination-button-current');
    dots[1].classList.add('slider-pagination-button-current');
    dots[2].classList.remove('slider-pagination-button-current');
  }
  if (i === 2) {
    mainBody.classList.add('body-condition-2');
    mainBody.classList.remove('body-condition-1');
    slides[0].classList.add('visually-hidden');
    slides[1].classList.add('visually-hidden');
    slides[2].classList.remove('visually-hidden');
    dots[0].classList.remove('slider-pagination-button-current');
    dots[1].classList.remove('slider-pagination-button-current');
    dots[2].classList.add('slider-pagination-button-current');
  } else if (i === 0) {
    mainBody.classList.add('body-condition-0')
    mainBody.classList.remove('body-condition-2');
    slides[0].classList.remove('visually-hidden');
    slides[1].classList.add('visually-hidden');
    slides[2].classList.add('visually-hidden');
    dots[0].classList.add('slider-pagination-button-current');
    dots[1].classList.remove('slider-pagination-button-current');
    dots[2].classList.remove('slider-pagination-button-current');
  }
}

dots[0].addEventListener('click', function () {
  mainBody.classList.add('body-condition-0')
  mainBody.classList.remove('body-condition-1');
  mainBody.classList.remove('body-condition-2');
  slides[0].classList.remove('visually-hidden');
  slides[1].classList.add('visually-hidden');
  slides[2].classList.add('visually-hidden');
  dots[0].classList.add('slider-pagination-button-current');
  dots[1].classList.remove('slider-pagination-button-current');
  dots[2].classList.remove('slider-pagination-button-current');
})

dots[1].addEventListener('click', function () {
  mainBody.classList.add('body-condition-1');
  mainBody.classList.remove('body-condition-2');
  slides[0].classList.add('visually-hidden');
  slides[1].classList.remove('visually-hidden');
  slides[2].classList.add('visually-hidden');
  dots[0].classList.remove('slider-pagination-button-current');
  dots[1].classList.add('slider-pagination-button-current');
  dots[2].classList.remove('slider-pagination-button-current');
})

dots[2].addEventListener('click', function () {
  mainBody.classList.add('body-condition-2');
  mainBody.classList.remove('body-condition-1');
  slides[0].classList.add('visually-hidden');
  slides[1].classList.add('visually-hidden');
  slides[2].classList.remove('visually-hidden');
  dots[0].classList.remove('slider-pagination-button-current');
  dots[1].classList.remove('slider-pagination-button-current');
  dots[2].classList.add('slider-pagination-button-current');
})

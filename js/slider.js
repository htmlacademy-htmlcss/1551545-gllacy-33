let slides = document.querySelectorAll('.ice-cream-slide');
let dots = document.querySelectorAll('.slider-pagination-button')
let prevButton = document.querySelector('.photo-prev');
let nextButton = document.querySelector('.photo-next');
let mainBody = document.querySelector('body');
let i = 0;

prevButton.onclick = function() {
  i--;
  if (i<0) {
    i = slides.length - 1;
  }
    if (i === 1) {
      mainBody.style.backgroundColor = '#69A9FF';
      slides[0].style.display = 'none';
      slides[1].style.display = 'flex';
      slides[2].style.display = 'none';
      dots[0].classList.remove('slider-pagination-button-current');
      dots[1].classList.add('slider-pagination-button-current');
      dots[2].classList.remove('slider-pagination-button-current');
    }
    if (i === 2) {
      mainBody.style.backgroundColor = '#FCC850';
      slides[0].style.display = 'none';
      slides[1].style.display = 'none';
      slides[2].style.display = 'flex';
      dots[0].classList.remove('slider-pagination-button-current');
      dots[1].classList.remove('slider-pagination-button-current');
      dots[2].classList.add('slider-pagination-button-current');
    } else if (i === 0) {
      mainBody.style.backgroundColor = '#FEAFC3';
      slides[0].style.display = 'flex';
      slides[1].style.display = 'none';
      slides[2].style.display = 'none';
      dots[0].classList.add('slider-pagination-button-current');
      dots[1].classList.remove('slider-pagination-button-current');
      dots[2].classList.remove('slider-pagination-button-current');
    }
}

nextButton.onclick = function() {
  i++;
  if (i>=slides.length) {
    i = 0;
  }
  if (i === 1) {
    mainBody.style.backgroundColor = '#69A9FF';
    slides[0].style.display = 'none';
    slides[1].style.display = 'flex';
    slides[2].style.display = 'none';
    dots[0].classList.remove('slider-pagination-button-current');
    dots[1].classList.add('slider-pagination-button-current');
    dots[2].classList.remove('slider-pagination-button-current');
  }
  if (i === 2) {
    mainBody.style.backgroundColor = '#FCC850';
    slides[0].style.display = 'none';
    slides[1].style.display = 'none';
    slides[2].style.display = 'flex';
    dots[0].classList.remove('slider-pagination-button-current');
    dots[1].classList.remove('slider-pagination-button-current');
    dots[2].classList.add('slider-pagination-button-current');
  } else if (i === 0) {
    mainBody.style.backgroundColor = '#FEAFC3';
    slides[0].style.display = 'flex';
    slides[1].style.display = 'none';
    slides[2].style.display = 'none';
    dots[0].classList.add('slider-pagination-button-current');
    dots[1].classList.remove('slider-pagination-button-current');
    dots[2].classList.remove('slider-pagination-button-current');
  }
}

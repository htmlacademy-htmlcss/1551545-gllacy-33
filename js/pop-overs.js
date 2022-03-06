let navigationCatalog = document.querySelector('.navigation-catalog');
let popoverCatalog = document.querySelector('.popover-catalog');
let navigationSearch = document.querySelector('.navigation-search');
let popoverSearch = document.querySelector('.popover-search');
let navigationLogin = document.querySelector('.log-in .navigation-link');
let popoverLogin = document.querySelector('.popover-log-in');
let navigationCart = document.querySelector('.menu-cart .navigation-link');
let popoverCart = document.querySelector('.menu-cart .popover');
let navigationLink = document.querySelector('.navigation-link');
let modalWindow = document.querySelector('.modal-container');
let buttonFeedback = document.querySelector('.feedback .button');
let exitButton = document.querySelector('.modal .delete-cross-button');


navigationCatalog.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popoverCatalog.style.display === 'none') {
    popoverCatalog.style.display = 'block';
    navigationLink.classList.toggle(':active');
  } else {
    popoverCatalog.style.display = 'none'
  }
})

navigationSearch.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popoverSearch.style.display ==='none') {
    popoverSearch.style.display = 'block';
  } else {
    popoverSearch.style.display = 'none';
  }
})

navigationLogin.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popoverLogin.style.display ==='none') {
    popoverLogin.style.display = 'block';
  } else {
    popoverLogin.style.display = 'none';
  }
})

navigationCart.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popoverCart.style.display ==='none') {
    popoverCart.style.display = 'block';
  } else {
    popoverCart.style.display = 'none';
  }
})

buttonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWindow.style.display = 'flex';
})

exitButton.addEventListener('click', function(evt){
  evt.preventDefault();
  modalWindow.style.display = 'none';
})

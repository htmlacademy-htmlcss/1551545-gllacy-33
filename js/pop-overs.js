let navigationCatalog = document.querySelector('.navigation-catalog');
let popoverCatalog = document.querySelector('.popover-catalog');
let navigationSearch = document.querySelector('.navigation-search');
let popoverSearch = document.querySelector('.popover-search');
let navigationLogin = document.querySelector('.log-in .navigation-link');
let popoverLogin = document.querySelector('.popover-log-in');
let navigationCart = document.querySelector('.menu-cart .navigation-link');
let popoverCart = document.querySelector('.menu-cart .popover');
let modalWindow = document.querySelector('.modal-container');
let buttonFeedback = document.querySelector('.feedback .button');
let exitButton = document.querySelector('.modal .delete-cross-button');


navigationCatalog.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigationCatalog.classList.toggle('js-menu-open');
  popoverCatalog.classList.toggle('js-popover-closed');
})

navigationCatalog.addEventListener('mouseover', function (evt) {
  evt.preventDefault();
  navigationCatalog.classList.add('js-menu-open');
  popoverCatalog.classList.remove('js-popover-closed');
})

navigationSearch.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigationSearch.classList.add('js-menu-open');
  popoverSearch.classList.toggle('js-popover-closed');
})

navigationLogin.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigationLogin.classList.toggle('js-menu-open');
  popoverLogin.classList.toggle('js-popover-closed');
})

navigationCart.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigationCart.classList.toggle('js-menu-open');
  popoverCart.classList.toggle('js-popover-closed');
})

buttonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove('js-popover-closed');
})

exitButton.addEventListener('click', function(evt){
  evt.preventDefault();
  modalWindow.classList.add('js-popover-closed');
})

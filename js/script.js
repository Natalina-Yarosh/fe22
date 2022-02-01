"use strict"

const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
   const headerMenu = document.querySelector('.header__menu');
   headerBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      headerBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   })
}

var swiper = new Swiper(".reviews-slider", {
   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },
});
"use strict"

// smooth scroll
const menuHeader = document.querySelectorAll('.header-list__item[data-goto]');
if (menuHeader.length > 0) {
   menuHeader.forEach(headerlistitem => {
      headerlistitem.addEventListener("click", onMenuHeaderClick);
   });
   function onMenuHeaderClick(e) {
      const headerlistitem = e.target;
      if (headerlistitem.dataset.goto && document.querySelector(headerlistitem.dataset.goto)) {
         const gotoBlock = document.querySelector(headerlistitem.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYoffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

// menu burger
const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
   const headerMenu = document.querySelector('.header__menu');
   headerBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      headerBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   })
}

// swiper
var swiper = new Swiper(".testimonials-slider", {
   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },
});
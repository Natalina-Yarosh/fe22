const swiper = new Swiper('.swiper', {
  initialSlide:2,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const bannerTitle = document.querySelector ('.banner__title');
const bannerText = document.querySelector ('.banner__text');
const bannerButton = document.querySelector ('.banner__button');
const burger = document.querySelector('.burger');

if (burger){
  const burgerNav = document.querySelector('.burger__nav');
  burger.addEventListener("click", function(e) { 
    document.body.classList.toggle('-lock');
    burger.classList.toggle('_active');
    burgerNav.classList.toggle('_active');
    bannerTitle.classList.toggle('-none');
    bannerText.classList.toggle('-none');
    bannerButton.classList.toggle('-none')

  });
}
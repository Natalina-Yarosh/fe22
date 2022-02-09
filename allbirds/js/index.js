var swiper = new Swiper(".swiper3", {

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	},
});

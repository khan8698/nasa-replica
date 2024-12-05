const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  grabCursor: true,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

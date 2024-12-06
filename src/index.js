//Main Swiper
const mainSwiper = new Swiper(".swiper-container-main", {
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

// Latest News Swiper
const LatestNewsSwiper = new Swiper(".swiper-container-latest-new", {
  // Optional parameters
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  spaceBetween: 4,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Missions Swiper
const missionsSwiper = new Swiper(".swiper-container-missions", {
  // Optional parameters
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
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

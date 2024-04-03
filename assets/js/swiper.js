// Only Import where using a swiper for clients logo
const swiper = new Swiper(".client_logos_swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

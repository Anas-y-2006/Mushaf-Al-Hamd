// function setLanguage(language) {
//   document.getElementById("language-button").innerHTML = `
//       <img src="/imgs/language_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="">
//       ${language}
//     `;

//   document.documentElement.setAttribute(direction);
// }
// //////////////////////////////////////////////////////
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("active");
});
// //////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: true,
  });
});
// //////////////////////////////////////////////////////
if (document.documentElement.dir === "rtl") {
  const imgHero = document.querySelector(".img-hero");
  imgHero.style.transform = "scaleX(1)";
}
// //////////////////////////////////////////////////////

// var swiper = new Swiper(".mySwiper", {
//   initialSlide: 1,
//   slidesPerView: 1.8,
//   spaceBetween: 20,
//   centeredSlides: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
var swiper = new Swiper(".swiper-container", {
  effect: "slide",
  grabCursor: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
  },
});
// /////////////////////////////////////////////////////////////////////
// استهداف الـ Modal
var videoModal = document.getElementById("videoModal");

// إضافة حدث عند إغلاق الـ Modal
videoModal.addEventListener("hidden.bs.modal", function () {
  // إيجاد iframe داخل الـ Modal
  var iframe = videoModal.querySelector("iframe");
  if (iframe) {
    iframe.src = iframe.src;
  }
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header_nav");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav_open");
});

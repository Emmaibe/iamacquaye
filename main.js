const slideBar = document.querySelector(".slide");
const carouselContainer = document.querySelector(".carousel");
const iconHamburger = document.querySelector(".icon-hamburger");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  iconHamburger.toggleAttribute("data-invisible");
});

// carouselContainer.addEventListener("mouseover", () => {
//   slideBar.toggleAttribute("opacity");
// });

// carouselContainer.addEventListener("mouseleave", () => {
//   slideBar.toggleAttribute("opacity");
// });

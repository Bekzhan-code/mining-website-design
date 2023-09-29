// HEADER BURGER
const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerNav.classList.toggle("active");
  document.body.classList.toggle("lock");
});

// HEADER NAVIGATION
const navLinks = document.querySelectorAll(".header__nav-item");
const windowPathname = window.location.pathname;

navLinks.forEach((link) => {
  const linkPathname = new URL(link.href).pathname;

  if (windowPathname === linkPathname) {
    link.classList.add("active");
  }
});

// FAQ question expanding
const questions = document.querySelectorAll(".faq__item");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
  });
});

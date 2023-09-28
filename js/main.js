const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerNav.classList.toggle("active");
  document.body.classList.toggle("lock");
});

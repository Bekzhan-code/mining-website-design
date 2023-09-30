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

// PASSWORD INPUT
const togglePasswordImg = document.querySelector("#toggle-password-img");
const passwordInput = document.querySelector("#password-input");

const togglePasswordConfirmImg = document.querySelector(
  "#toggle-confirm-password-img"
);
const passwordConfirmInput = document.querySelector("#password-confirm-input");

const togglePassword = (pasInput, pasImg) => {
  const type =
    pasInput.getAttribute("type") === "password" ? "text" : "password";
  pasInput.setAttribute("type", type);

  pasImg.src = pasImg.src.includes("close")
    ? pasImg.src.replace("close", "open")
    : pasImg.src.replace("open", "close");
};

togglePasswordImg.addEventListener("click", () => {
  togglePassword(passwordInput, togglePasswordImg);
});

togglePasswordConfirmImg.addEventListener("click", () => {
  togglePassword(passwordConfirmInput, togglePasswordConfirmImg);
});

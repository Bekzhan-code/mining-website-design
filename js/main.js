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
const sections = document.querySelectorAll("section");
const windowPath = window.location.href;

// Добавляет класс 'active' для нажатой ссылки
navLinks.forEach((link) => {
  const linkPath = link.href;

  if (windowPath[windowPath.length - 1] === "/") {
    document.querySelector(".header__nav-item").classList.add("active");
  } else if (windowPath === linkPath) {
    link.classList.add("active");
  }
});

// Добавляет класс 'active' по мере достижения конкретной секции в странице
// page-top задана для того чтобы поменять активную ссылку с конкретной СЕКЦИИ на конкретуную  СТРАНИЦУ при достижении секции hero

if (sections[0].classList.contains("page-top")) {
  window.onscroll = () => {
    let current;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      } else if (section.classList.contains("hero")) {
        current = "page-top";
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.classList.contains(current)) {
        link.classList.add("active");
      }
    });
  };
}

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

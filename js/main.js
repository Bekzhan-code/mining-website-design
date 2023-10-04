// HEADER BURGER
const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const headerAuthBtns = document.querySelector(".header__authentication-btns");

const toggleHeaderNav = () => {
  headerBurger.classList.toggle("active");
  headerNav.classList.toggle("active");
  headerAuthBtns.classList.toggle("active");
  document.body.classList.toggle("lock");
};

headerBurger.addEventListener("click", () => {
  toggleHeaderNav();
});

// HEADER NAVIGATION
const navLinks = document.querySelectorAll(".header__nav-item");
const sections = document.querySelectorAll("section");
const windowPath = window.location.href;

// Добавляет класс 'active' для нажатой ссылки
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleHeaderNav();
  });

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

// FAQ QUESTION EXPANDING
const questions = document.querySelectorAll(".faq__item");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
  });
});

// SLIDER
const sliders = document.querySelector(".coins-illustration__item input");

sliders.forEach((slider) => {
  slider.addEventListener("mousemove", () => {
    const percentage = slider.value;
    const color = `linear-gradient(90deg, $blue ${percentage}%, #2c2c2c ${percentage}%)`;

    // console.log(color);

    slider.style.background = color;

    // console.log(slider.style);
  });
});

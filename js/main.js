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
const header = document.querySelector(".header");
const windowPath = window.location.href;

// Добавляет цвет фона в header при опускании вниз по стр.
const changeTransparency = () => {
  if (scrollY !== 0) header.style.backgroundColor = "#090909";
  else header.style.backgroundColor = "transparent";
};
window.onscroll = () => {
  changeTransparency();
};

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
    changeTransparency();

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
const sliders = document.querySelectorAll(".coins-illustration__item input");
const coinsIllustrationList = document.querySelectorAll(
  ".coins-illustration__item"
);
const coinsGhs = document.querySelectorAll(
  ".coins-illustration__top-info span"
);
const coinsPercentage = document.querySelectorAll(
  ".coins-illustration__graph p"
);

sliders.forEach((slider, index) => {
  slider.addEventListener("input", (e) => {
    if (e.target.value == 0) {
      coinsIllustrationList[index].classList.add("inactive");
      coinsPercentage[index].textContent = "0.00% Daily";
    } else {
      coinsIllustrationList[index].classList.remove("inactive");
      coinsPercentage[index].textContent = "+2.00% Daily";
    }

    const tempSliderVal = e.target.value;

    const percentage = (tempSliderVal / slider.max) * 100;

    slider.style.background = `linear-gradient(to right, #2453cc ${percentage}%, #2c2c2c ${percentage}%)`;
  });
});

// COPY AFFILIATE LINK
const copyText = document.querySelector(".bonus-cards__item-bottom input");
const copyBtn = document.querySelector(".bonus-cards__item-bottom button");

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyText.value);
  });
}

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

if (togglePasswordConfirmImg) {
  togglePasswordConfirmImg.addEventListener("click", () => {
    togglePassword(passwordConfirmInput, togglePasswordConfirmImg);
  });
}

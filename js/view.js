const FILTER_TAGS = ["update", "his", "arh", "viw"];

function filterSelection(category) {
  const blocks = document.querySelectorAll("#sec2 .block");
  const buttons = document.querySelectorAll("#sec1 .filt .btn");

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });

  blocks.forEach((block) => {
    const blockCategory = FILTER_TAGS.find((tag) =>
      block.classList.contains(tag),
    );
    const isVisible = category === "all" || blockCategory === category;
    block.classList.toggle("hidden", !isVisible);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Фильтрация постов
  const buttons = document.querySelectorAll("#sec1 .filt .btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterSelection(btn.dataset.filter);
    });
  });

  const subscribeForm = document.getElementById("subscribeForm");
  const formWrapper = subscribeForm.querySelector(".form-wrapper");
  const successMessage = subscribeForm.querySelector(".success-message");
  const emailInput = document.getElementById("emailInput");
  const inputBox = document.getElementById("inputBox");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = emailInput.value.trim();

    const oldBadge = subscribeForm.querySelector(".custom-error-badge");
    if (oldBadge) oldBadge.remove();

    if (emailPattern.test(value)) {
      formWrapper.style.display = "none";
      successMessage.style.display = "flex";
    } else {
      const errorBadge = document.createElement("div");
      errorBadge.className = "custom-error-badge";
      errorBadge.innerHTML = "<span>!</span> Ошибка в E-mail";

      subscribeForm.appendChild(errorBadge);
    }
  });

  emailInput.addEventListener("input", () => {
    const oldBadge = subscribeForm.querySelector(".custom-error-badge");
    if (oldBadge) oldBadge.remove();
  });
});

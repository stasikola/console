document.addEventListener("DOMContentLoaded", () => {
  const modeItems = document.querySelectorAll(".mode-item");

  modeItems.forEach((item) => {
    const trigger = item.querySelector(".mode-trigger");

    trigger.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dots .dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 0;

  function updateSlider(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  prevBtn.addEventListener("click", () => {
    let index = currentSlide - 1;
    if (index < 0) index = slides.length - 1;
    updateSlider(index);
  });

  nextBtn.addEventListener("click", () => {
    let index = (currentSlide + 1) % slides.length;
    updateSlider(index);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateSlider(index);
    });
  });

  const hintTriggers = document.querySelectorAll(".hint-trigger");
  const infoCards = document.querySelectorAll(".info-card");

  hintTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = trigger.getAttribute("data-target");
      const targetCard = document.getElementById(targetId);

      const isActive = trigger.classList.contains("active");

      hintTriggers.forEach((t) => t.classList.remove("active"));
      infoCards.forEach((c) => c.classList.remove("active"));

      if (!isActive) {
        trigger.classList.add("active");
        targetCard.classList.add("active");
      }
    });
  });

  document.addEventListener("click", () => {
    hintTriggers.forEach((t) => t.classList.remove("active"));
    infoCards.forEach((c) => c.classList.remove("active"));
  });
});

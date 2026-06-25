document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    'url("images/slide_1.jpg")',
    'url("images/slide_2.jpg")',
    'url("images/slide_3.jpg")',
  ];

  let activeIndex = 0;
  const sliderElement = document.getElementById("photo-slider");
  const dotElements = document.querySelectorAll(".slider-dots .dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  sliderElement.style.backgroundImage = slides[activeIndex];

  function changeToSlide(index) {
    activeIndex = index;
    sliderElement.style.backgroundImage = slides[activeIndex];

    dotElements.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    let index = activeIndex - 1;
    if (index < 0) index = slides.length - 1;
    changeToSlide(index);
  });

  nextBtn.addEventListener("click", () => {
    let index = (activeIndex + 1) % slides.length;
    changeToSlide(index);
  });

  dotElements.forEach((dot, index) => {
    dot.addEventListener("click", () => changeToSlide(index));
  });
});

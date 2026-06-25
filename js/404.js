document.addEventListener("DOMContentLoaded", () => {
  const images = ["images/404.svg", "images/404-1.svg", "images/401-2.svg"];
  let currentIndex = 0;
  const errorImgElement = document.getElementById("error-image");

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    errorImgElement.src = images[currentIndex];
  }, 1000); //
});

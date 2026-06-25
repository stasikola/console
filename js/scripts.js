// панорама
document.addEventListener("DOMContentLoaded", () => {
  const timeline = [
    { century: "20 век", image: "images/panorama_1.jpg" },
    { century: "16 век", image: "images/panorama_2.jpg" },
    { century: "12 век", image: "images/panorama_3.jpg" },
  ];

  let currentIndex = 1;
  let pannellumViewer = null;

  function renderTimeline() {
    if (pannellumViewer) {
      pannellumViewer.destroy();
    }

    pannellumViewer = pannellum.viewer("panorama-container", {
      type: "equirectangular",
      panorama: timeline[currentIndex].image,
      autoLoad: true,
      autoRotate: -0.5,
      showControls: false,
      compass: false,
    });

    const leftIndex = (currentIndex - 1 + timeline.length) % timeline.length;
    const rightIndex = (currentIndex + 1) % timeline.length;

    document.getElementById("label-left").textContent =
      timeline[leftIndex].century;
    document.getElementById("label-current").textContent =
      timeline[currentIndex].century;
    document.getElementById("label-right").textContent =
      timeline[rightIndex].century;
  }

  renderTimeline();

  document.getElementById("btn-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % timeline.length;
    renderTimeline();
  });

  document.getElementById("btn-prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + timeline.length) % timeline.length;
    renderTimeline();
  });
});

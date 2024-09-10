document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.querySelector(".range-slider__input");
  const progress = document.querySelector(".range-slider__progress");
  const valueDisplay = document.querySelector(".range-slider__value");

  function updateSlider() {
    const value = rangeInput.value;
    const max = rangeInput.max;
    const percent = (value / max) * 100;
    progress.style.width = percent + "%";
    valueDisplay.textContent = `${value}%`;
  }

  rangeInput.addEventListener("input", updateSlider);
  updateSlider();
});

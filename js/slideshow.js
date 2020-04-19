document.addEventListener("DOMContentLoaded", function () {
  var sliderButtons = document.querySelectorAll("[data-slider-button]");
  sliderButtons.forEach(function (button) {
    button.addEventListener("click", handleClickOnSliderButton);
  });
});

function handleClickOnSliderButton(event) {
  var button = event.target;

  var test = {
    testkey: "testvalue",
  };   /* test clés/valeurs js */

  var sliderContainer = document.querySelector(
    "[data-slider-images-container]"
  );

  var sliderImages = document.querySelectorAll("[data-slider-item]");

  var buttonDirection = button.dataset.direction;

  var newIndex;
  if (buttonDirection === "right") {
    newIndex = parseInt(sliderContainer.dataset.sliderDisplayed) + 1;
    if (newIndex === sliderImages.length) {
      newIndex = 0;
    }
  } else {
    newIndex = sliderContainer.dataset.sliderDisplayed - 1;
    if (newIndex < 0) {
      newIndex = sliderImages.length - 1;
    }
  }
  sliderContainer.setAttribute("data-slider-displayed", newIndex);
  console;

  sliderContainer.style.left = -100 * newIndex + "%";
}

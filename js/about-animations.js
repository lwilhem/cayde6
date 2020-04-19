document.addEventListener("DOMContentLoaded", function () {
  var story = document.querySelector("[data-text-history]");
  var abilities = document.querySelector("[data-text-abilities]");
  story.addEventListener("click", function () {
    handleClickOnHistory(story, abilities);
  });
  abilities.addEventListener("click", function () {
    handleClickOnAbilities(story, abilities);
  });
});

function handleClickOnHistory(story, abilities) {
  abilities.classList.remove("active");
  story.classList.add("active");
}

function handleClickOnAbilities(story, abilities) {
  story.classList.remove("active");
  abilities.classList.add("active");
}

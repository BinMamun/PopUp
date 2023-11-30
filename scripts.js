const popupButton = document.querySelector(".js-popup-btn");
const card = document.querySelector(".js-card");
const okButton = document.querySelector(".js-ok-button");

popupButton.addEventListener("click", () => {
  card.classList.add("open-popup");
})

okButton.addEventListener("click", () => {
  card.classList.remove("open-popup");
})
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile-bloks__edit-button");

const openPopup = function () {
  popupElement.classList.add("popup_opened");
  console.log("Open popup clicked")
};

const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

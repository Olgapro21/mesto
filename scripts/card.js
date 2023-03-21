//5 спринт
const popupCardElement = document.querySelector(".popup_type_card");
const popupCardOpenButtonElement = document.querySelector(".profile__add-button"); //открыть
const popupCardCloseButtonElement = document.querySelectorAll(".popup__close"); //закрыть

const openPopupCard = function () {
  popupCardElement.classList.add("popup_opened");
};

const closePopupCard  = function () {
  popupCardElement.classList.remove("popup_opened");
};

popupCardOpenButtonElement.addEventListener("click", openPopupCard);
popupCardCloseButtonElement.addEventListener("click", closePopupCard);

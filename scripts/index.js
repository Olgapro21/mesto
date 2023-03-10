const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile-bloks__edit-button");

const openPopup = function () {
  popupElement.classList.add("popup_opened");
  console.log("Open popup clicked");
};

const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

// Меняем статус аватара
let formElement = popupElement.querySelector(".popup__form");
let nameInputElement = formElement.querySelector(".popup__form-input_status_name");
let jobInputElement = formElement.querySelector(".popup__form-input_status_job");
let profileNameElement = document.querySelector(".profile-bloks__title");
let profileJobElement = document.querySelector(".profile-bloks__subtitle");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInputElement.value;
  profileJobElement.textContent = jobInputElement.value;
    popupElement.classList.remove("popup_opened");
};

formElement.addEventListener('submit', handleFormSubmit);

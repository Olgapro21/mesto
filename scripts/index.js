import initialCards from './cards.js' //массив изначальных карточек
import Card from './card.js'
import FormValidator from './Formvalidator.js'

const popupElements = document.querySelectorAll(".popup"); //  попап общий
const profilePopup = document.querySelector(".popup_type_profile"); // доп попап профиля
const popupCloseButton = document.querySelectorAll(".popup__close"); // кнопка закрытия попапа
const profileOpenButton = document.querySelector(".profile__edit-button"); // кнопка открытия профиля
const profileForm = profilePopup.querySelector(".popup__form_type_profile"); //форма профиля
const nameInputProfileForm = profileForm.querySelector(".popup__input_status_name"); // импут имени popup__input
const jobInputProfileForm = profileForm.querySelector(".popup__input_status_job"); // импут статуса
const profileNameForm = document.querySelector(".profile__title");
const profileJobForm = document.querySelector(".profile__subtitle");
//Форма открытия попапа "Новое место"
const popupCardElement = document.querySelector(".popup_type_card"); //доп попап Новое место
const popupCardOpenButtonElement = document.querySelector(".profile__add-button"); //кнопка открыть
const formCardElement = document.querySelector(".popup__form_type_card"); //форма новое место
const formInputtitle = document.querySelector(".popup__input_type_title"); //импут надписи
const formInputlink = document.querySelector(".popup__input_type_link"); //импут фото
const itemTemplate = "#elements-template"; // нашла темлейт
const list = document.querySelector(".element"); // нашла ul
const popupImageElement = document.querySelector(".popup_type_image"); //доп попап открытие фото
const popupImage = document.querySelector(".popup__image");
const popuptitle = document.querySelector(".popup__image-title");

const validationConfig = {
  inputSelector: '.popup__input', // импут *
  submitButtonSelector: '.popup__button', //активная кнопка *
  inactiveButtonClass: 'popup__button_disabled', //кнопка не активна *
  inputErrorClass: 'popup__input_type_error', // появляется при ошибке в импуте * красное подчеркивание
  errorClass: 'popup__error_visible', // появляется при ошибке в спане дисплей флекс
  errorSelector: '.popup__error_type_' // контейнер для уникального name *
}

//открытие попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEscape);
}

//закрытие попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEscape);
}

popupCloseButton.forEach((element) => {
  const popup = element.closest(".popup");
  element.addEventListener("click", () => {
    closePopup(popup);
  });
});

//Закрытие попапов при нажатии на Esc
function closePopupEscape(evt) {
  if (evt.key ==='Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

//Закрытие попапов при нажатии на пустое поле
function closePopupOverlay (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.currentTarget);
};

popupElements.forEach(function(popup) {
  popup.addEventListener('mousedown', closePopupOverlay);
});

//открытие профиля
profileOpenButton.addEventListener("click", () => {
  formProfileValidationConfig.resetErrorMessageOpenForm()//очистка сообщений об ошибке
  nameInputProfileForm.value = profileNameForm.textContent;
  jobInputProfileForm.value = profileJobForm.textContent;
  openPopup(profilePopup);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameForm.textContent = nameInputProfileForm.value;
  profileJobForm.textContent = jobInputProfileForm.value;
  closePopup(profilePopup);
}

profilePopup.addEventListener("submit", handleProfileFormSubmit);

function createCardNew(object) {
  const card = new Card(object, itemTemplate, openPopupImage)
  const cardObject = card.createCard()
  return cardObject;
}

function openPopupImage(item) {
  popupImage.alt = item.name;
  popupImage.src = item.link;
  popuptitle.textContent = item.name;
  openPopup(popupImageElement);
};

//функция добавления карточки
function addNewCard(container, card) {
  container.prepend(card)
};

//Прошлась по массиву изначальных карточек
initialCards.forEach((object) => {
  addNewCard(list, createCardNew(object))
});

//валидация для профиля
const formProfileValidationConfig = new FormValidator(validationConfig, profileForm);
formProfileValidationConfig.enadleValidation();

//валидация для новое место
const formCardValidationConfig = new FormValidator(validationConfig, formCardElement);
formCardValidationConfig.enadleValidation();

//Открытие попапа "Новое место"
popupCardOpenButtonElement.addEventListener("click", () => {
  //очистила форму если были внесены изменения, а сабмит не произошел
  formInputtitle.value = '';
  formInputlink.value = '';
  formCardValidationConfig.resetErrorMessageOpenForm()//очистка сообщений об ошибке
  openPopup(popupCardElement);
});

//Сабмит передачи новых данных в массив
formCardElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const itemNew = {name: formInputtitle.value, link: formInputlink.value};
  addNewCard(list, createCardNew(itemNew))
  closePopup(popupCardElement);
});

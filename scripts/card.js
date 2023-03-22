const popup = document.querySelector('.popup'); // основной попап
const popupElement = document.querySelector(".popup_type_profile"); // доп попап профиля
const popupCardElement = document.querySelector(".popup_type_card"); // доп попап Новое место
const popupImageElement = document.querySelector(".popup__open-image"); // доп попап открытие фото
const popupCloseButtonElement = popupElement.querySelector(".popup__close"); // кнопка закрытия попапа
const popupOpenButtonElement = document.querySelector(".profile__edit-button"); // кнопка открытия профиля
const popupCardOpenButtonElement = document.querySelector(".profile__add-button"); //  кнопка Новое место

//Открытие попапов
function openPopup(item) {
  item.classList.add('popup_opened')
};

//Закрытие попапов
function closePopup(item) {
  item.classList.remove('popup_opened')
};

popupOpenButtonElement.addEventListener('click', function () {
  openPopup(popupElement);
  nameInput.value = profileTitle.textContent;
  infoInput.value = profileSubtitle.textContent;
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;
  closePopup(popupElement);
};


//4 спринт
const popupElement = document.querySelector(".popup_type_profile");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");

const openPopup = function () {
  popupElement.classList.add("popup_opened");
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value =profileJobElement.textContent;
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
let profileNameElement = document.querySelector(".profile__title");
let profileJobElement = document.querySelector(".profile__subtitle");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInputElement.value;
  profileJobElement.textContent = jobInputElement.value;
  closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);

//5 спринт
// Шесть карточек «из коробки»
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const itemTemplate = document.querySelector(".elements-template").content;
const list = document.querySelector(".element");
const formInputtitle = document.querySelector(".popup__form-input_type_title");
const formInputlink = document.querySelector(".popup__form-input_type_link");
const formButton = document.querySelector(".popup__save_type_card");

initialCards.forEach(renderItem);

function renderItem(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  htmlElement.querySelector(".element__image").src = item.link;
  htmlElement.querySelector(".element__image").alt = item.name;
  htmlElement.querySelector(".element__title").textContent = item.name;
  setEventListeners(htmlElement);
// Лайк карточки
htmlElement.querySelector(".element__like-ico").addEventListener('click', function (evt) {
  const eventTarget = evt.target;
    evt.target.classList.toggle("element__like-ico_active");
});
  list.append(htmlElement);
};

// Удаление карточки!!!!!!
function handleDelete (event) {
  const listDelete = event.target.closest(".element__list");
  listDelete.remove();
};

function setEventListeners(htmlElement) {
	htmlElement.querySelector(".element__delete-image").addEventListener('click', handleDelete);
};

//Форма добавления карточки
const popupCardElement = document.querySelector(".popup_type_card");
const popupCardOpenButtonElement = document.querySelector(".profile__add-button"); //открыть
const popupCardCloseButtonElement = document.querySelector(".popup__close-card"); //закрыть

//Открытие карточки
const openPopupCard = function () {
  popupCardElement.classList.add("popup_opened");
};
//Закрытие карточки
const closePopupCard  = function () {
  popupCardElement.classList.remove("popup_opened");
};

popupCardOpenButtonElement.addEventListener("click", openPopupCard);
popupCardCloseButtonElement.addEventListener("click", closePopupCard);


//Добавление карточки

































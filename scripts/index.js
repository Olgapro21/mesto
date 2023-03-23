//4 спринт
const popup = document.querySelector('.popup'); // основной попап
const popupElement = document.querySelector(".popup_type_profile"); // доп попап профиля
const popupCloseButtonElement = popupElement.querySelector(".popup__close"); // кнопка закрытия попапа
const popupOpenButtonElement = document.querySelector(".profile__edit-button"); // кнопка открытия профиля

//открытие попапа профиля
const openPopup = function () {
  popupElement.classList.add("popup_opened");
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value =profileJobElement.textContent;
};
//закрытие попапа профиля
const closePopup = function () {
  popup.classList.remove("popup_opened");
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

const itemTemplate = document.querySelector(".elements-template").content; // нашла темлейт
const list = document.querySelector(".element"); // нашла ul
//const formInputtitle = document.querySelector(".popup__form-input_type_title");
//const formInputlink = document.querySelector(".popup__form-input_type_link");
//const formButton = document.querySelector(".popup__save_type_card");
//Попап с фото
const popupImageElement = document.querySelector(".popup__open-image"); //доп попап открытие фото
const popupImageCloseButtonElement = document.querySelector(".popup__close-image"); //закрыть
const popupImage = document.querySelector(".popup__image");
const popuptitle = document.querySelector(".popup__image-title");


initialCards.forEach(renderItem,); // массив

function renderItem(item) {
  const htmlElement = itemTemplate.cloneNode(true); // скопировала темплейт
  htmlElement.querySelector(".element__image").src = item.link; //добавила картинки
  htmlElement.querySelector(".element__image").alt = item.name;
  htmlElement.querySelector(".element__title").textContent = item.name; //добавила текст
  htmlElement.querySelector('.element__image').addEventListener('click', function () {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popuptitle.textContent = item.name;
  openPopupImage ();
  });
  setEventListeners(htmlElement); //вызвала функцию
  list.append(htmlElement); //добавила с помощью метода append наш клон в ul в конец
};

//открытие попапа фото
const openPopupImage = function () {
  popupImageElement.classList.add("popup_opened");
}

//Закрытие фото
const closePopupImage = function () {
popupImageCloseButtonElement.classList.remove("popup_opened");
};

popupImageCloseButtonElement.addEventListener("click", closePopupImage);

// Удаление карточки
function handleDelete (event) {
  const listDelete = event.target.closest(".element__list");
  listDelete.remove(); // удалила DOM элемент
};

// Лайк карточки
function handleLike (evt) {
  const likeActive = evt.target;
  evt.target.classList.toggle("element__like-ico_active");
};

//создала отдельную функцию, чтобы не загружать темплейт
function setEventListeners(htmlElement) {
	htmlElement.querySelector(".element__delete-image").addEventListener('click', handleDelete); //добавила кнопку карзины на которую про
  htmlElement.querySelector(".element__like-ico").addEventListener('click', handleLike);

};











//Форма открытия попапа добавления карточек
const popupCardElement = document.querySelector(".popup_type_card"); //доп попап Новое место
const popupCardOpenButtonElement = document.querySelector(".profile__add-button"); //открыть
const popupCardCloseButtonElement = document.querySelector(".popup__close-card"); //закрыть

//Открытие
const openPopupCard = function () {
  popupCardElement.classList.add("popup_opened"); //добавила popup_opened
};
//Закрытие
const closePopupCard  = function () {
popupCardElement.classList.remove("popup_opened"); //удалила popup_opened
};

popupCardOpenButtonElement.addEventListener("click", openPopupCard);
popupCardCloseButtonElement.addEventListener("click", closePopupCard);









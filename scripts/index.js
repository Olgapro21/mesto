//4 спринт
const profilePopup = document.querySelector(".popup_type_profile"); // доп попап профиля
const popupCloseButton = document.querySelectorAll(".popup__close"); // кнопка закрытия попапа
const profileOpenButton = document.querySelector(".profile__edit-button"); // кнопка открытия профиля

//открытие попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

profileOpenButton.addEventListener("click", () => {
  nameInputProfileForm.value = profileNameForm.textContent;
  jobInputProfileForm.value = profileJobForm.textContent;
  openPopup(profilePopup);
});

//закрытие попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

popupCloseButton.forEach((element) => {
  const popup = element.closest(".popup");
  element.addEventListener("click", () => {
    closePopup(popup);
  });
});

// Меняем статус аватара
const profileForm = profilePopup.querySelector(".popup__form"); //форма профиля
const nameInputProfileForm = profileForm.querySelector(".popup__form-input_status_name");
const jobInputProfileForm = profileForm.querySelector(".popup__form-input_status_job");
const profileNameForm = document.querySelector(".profile__title");
const profileJobForm = document.querySelector(".profile__subtitle");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameForm.textContent = nameInputProfileForm.value;
  profileJobForm.textContent = jobInputProfileForm.value;
  closePopup(profilePopup);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

//5 спринт
// Шесть карточек «из коробки»
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const itemTemplate = document.querySelector(".elements-template").content; // нашла темлейт
const list = document.querySelector(".element"); // нашла ul
const popupImageElement = document.querySelector(".popup_type_image"); //доп попап открытие фото
const popupImage = document.querySelector(".popup__image");
const popuptitle = document.querySelector(".popup__image-title");

//Создаем массив карточек
function renderItem(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const imageTemplateElement = htmlElement.querySelector(".element__image");
  imageTemplateElement.src = item.link;
  imageTemplateElement.alt = item.link;
  htmlElement.querySelector(".element__title").textContent = item.name;
  imageTemplateElement.addEventListener("click", function () {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popuptitle.textContent = item.name;
    openPopup(popupImageElement);
  });
  setEventListeners(htmlElement); //вызвала функцию
  return htmlElement;
}

//Прошлась по массиву
initialCards.forEach((object) => {
  const card = renderItem(object);
  list.append(card); //добавила с помощью метода append наш клон в ul в конец
});

// Удаление карточки
function handleDelete(event) {
  const listDelete = event.target.closest(".element__list");
  listDelete.remove(); // удалила DOM элемент
}

// Лайк карточки
function handleLike(evt) {
  const likeActive = evt.target;
  evt.target.classList.toggle("element__like-ico_active");
}

//создала отдельную функцию, чтобы не загружать темплейт
function setEventListeners(htmlElement) {
  htmlElement.querySelector(".element__delete-image").addEventListener("click", handleDelete); //добавила кнопку карзины на которую про
  htmlElement.querySelector(".element__like-ico").addEventListener("click", handleLike); // лайк
}

//Форма открытия попапа "Новое место"
const popupCardElement = document.querySelector(".popup_type_card"); //доп попап Новое место
const popupCardOpenButtonElement = document.querySelector(".profile__add-button"); //открыть
const formCardElement = popupCardElement.querySelector(".popup__form");
const titleElement = document.querySelector(".element__title");
const formInputtitle = document.querySelector(".popup__form-input_type_title"); //импут надписи
const formInputlink = document.querySelector(".popup__form-input_type_link"); //импут фото

//Открытие попапа "Новое место"
popupCardOpenButtonElement.addEventListener("click", () => {
  openPopup(popupCardElement);
});

//Сабмит передачи новых данных в массив
formCardElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const itemNew = {name: formInputtitle.value, link: formInputlink.value};
  list.prepend(renderItem(itemNew));
  closePopup(popupCardElement);
  evt.target.reset();
});
